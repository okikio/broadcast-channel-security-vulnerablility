const app = document.querySelector('#app');

const WorkerFileUrl = new URL('./worker.js', import.meta.url);
const WorkerContent = new Blob([
  await fetch(WorkerFileUrl).then(res => res.arrayBuffer())
], { type: 'application/javascript' });

const WorkerURL = `data:${WorkerContent.type};base64,${btoa(await WorkerContent.text())}`;
// const WorkerURL = URL.createObjectURL(WorkerContent);
new Worker(WorkerURL);

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
