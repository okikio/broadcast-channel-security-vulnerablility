# broadcast-channel-security-vulnerablility

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-snzbg2)

There is a vulnerability in Broadcast Channel which allows for Cross Site Scripting (XSS) when using Eval (In-direct and with "use strict"), this is due to the fact that the browser still sees eval as the same browsing context and allows Broadcast Channel messages through. If a nepharious user gets access to the eval environment and create a new Broacast Channel with the same channel name, they could potentially interupt messages in nepharious ways, e.g. collecting basic information broadcasted, or even worse broadcast data that's isn't wanted.   

A possible use of this vulnerability would be a message to a Service Worker, which could cuase all sorts of problems, e.g. messing up caching strategy depending on how the websites/web apps code is structured and how the nepharious individual chooses to use this vulnerability.
