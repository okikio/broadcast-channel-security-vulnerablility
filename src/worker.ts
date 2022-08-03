'use strict';

const code = (msg: string) => `
const broadchannel = new BroadcastChannel('broad-cast');
broadchannel.onmessage = ({ data }) => {
  console.log(data);
};
broadchannel.postMessage('From ${msg} in Worker');
`;

eval(code('Eval'));
(0, eval)(code('In-Direct Eval'));
Function(`${code('Function')} return broadchannel`);
Function(`"use strict";\n${code('Use-Strict Function')} return broadchannel`);

export {};
