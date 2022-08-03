const app = document.querySelector('#app');

new Worker(new URL('./worker.js', import.meta.url));

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
