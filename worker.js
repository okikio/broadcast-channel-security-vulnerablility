const code = (msg) => `
let broadchannel = new BroadcastChannel('broad-cast');
broadchannel.onmessage = ({ data }) => {
  console.log(data);
};
broadchannel.postMessage('From ${msg} in Worker');
`;

function evaluate() {
  'use strict';

  eval(code('Eval'));
  Function(`${code('Function')} return broadchannel`)();

  (0, eval)(code('In-Direct Eval'));
  Function(
    `"use strict";\n${code('Use-Strict Function')} return broadchannel`
  )();
}

evaluate();
