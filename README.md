# broadcast-channel-security-vulnerablility

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-snzbg2)

There is a vulnerability in the Broadcast Channel API which allows for possible arbitrary code execution when using Eval in all modes. This is due to the fact that the browser still sees eval as the same browsing context and allows Broadcast Channel messages through. If a nefarious user gets access to the eval environment and creates a new Broadcast Channel with the same channel name as the one used in code they could potentially man-in-the-middle messages across browsing context, e.g. collecting broadcasted information and tracking users, or even worse broadcast data that's isn't wanted and interrupt the normal process of website.

A possible use of this vulnerability would be a message to a Service Worker, which could cuase all sorts of problems, e.g. messing up caching strategy (depending on how the websites/web apps code is structured) and how the nepharious individual chooses to use this vulnerability.

> Note: this affects all browser vendors as of August 2nd, 2022 EST
> * Edge & Chrome: 103.0.1264.77 & 104.0.5112.79
> * Safari & Safari Technoloy Preview: 15.6 (17613.3.9.1.5) & 150 (Safari 16.0, WebKit 17614.1.22.1.2)
> * Firefox: 103.0.1  

^ This may also affect older browsers, but I have not yet confirmed this
