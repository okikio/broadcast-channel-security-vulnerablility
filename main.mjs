const app = document.querySelector('#app');

const WorkerUrl = new URL('./worker.js', import.meta.url);
const WorkerContent = new Blob([
  await fetch(WorkerUrl).then(res => res.arrayBuffer())
], { type: 'application/javascript' });
new Worker(URL.createObjectURL(WorkerContent));

const broadchannel = new BroadcastChannel('broad-cast');
broadchannel.onmessage = ({ data }) => {
  console.log(data);

  const div = document.createElement('div');
  div.innerText = data;
  app.appendChild(div);
};

setTimeout(() => {
  broadchannel.postMessage('From Main Thread');
}, 100);
