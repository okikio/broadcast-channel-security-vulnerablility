# broadcast-channel-security-vulnerablility

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-snzbg2)

There is a vulnerability in Broadcast Channel which allows for Cross Site Scripting (XSS) when using Eval (In-direct and with "use strict"), this is due to the fact that the browser still sees eval as the same browsing context and allows Broadcast Channel messages through. If a nepharious user gets access to the eval environment and create a new Broacast Channel with the same channel name, they could potentially interupt messages in nepharious ways, e.g. collecting basic information broadcasted, or even worse broadcast data that's isn't wanted.   
