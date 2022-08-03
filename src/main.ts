import './style.css';
import typescriptLogo from './typescript.svg';
import WebWorker from './worker.ts?worker';

const app = document.querySelector<HTMLDivElement>('#app');

app!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

new WebWorker();

const broadchannel = new BroadcastChannel('broad-cast');
broadchannel.onmessage = ({ data }) => {
  console.log(data);

  const div = document.createElement('div');
  div.innerText = data;
  app!.appendChild(div);
};

setTimeout(() => {
  broadchannel.postMessage('From Main Thread');
}, 100);
