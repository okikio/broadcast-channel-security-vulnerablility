# broadcast-channel-security-vulnerablility

[Edit on StackBlitz ⚡️](https://stackblitz.com/github/okikio/broadcast-channel-security-vulnerablility?file=README.md)

There is a vulnerability in the Broadcast Channel API which allows for possible arbitrary code execution when using eval in all modes e.g. direct, in-direct, function, etc... This is due to the fact that the browser still sees eval as the same browsing context no-matter where eval is placed and allows Broadcast Channel messages through.

If a nefarious user gets access to the eval environment and creates a new Broadcast Channel with the same channel name as the one used in the websites source code, they could potentially man-in-the-middle messages across browsing context, e.g. collecting broadcasted information and tracking users, or even worse broadcast data that's isn't wanted and interrupt the normal process of the website or web app.

A possible use of this vulnerability would be a message to a Service Worker, which could cause all sorts of problems, e.g. messing up caching strategy (depending on how the websites/web apps code is structured and how the nefarious individual chooses to use this vulnerability, it could render a site in-operable).

I discovered this issue while trying to use Broadcast Channel to communicate across web workers while also running eval in a separate web worker. At first I thought I was the one doing it wrong, but then I found out it's actually a part of the spec., browser vendors might need to deviate from the spec or introduce new ways of limiting the scope of Broadcast Channel when running in an eval.

### Updates...

After reporting this vulnerability to Google and Firefox, they've both closed the cases I opened with the repsonse being that's what is expected from the how the spec is written, and there isn't much theu can do to actually mitigate the risk.

> On firefox you can limit the reach of Broadcast Channel to only the Worker that created it by using `data` urls to create the Worker as in Firefox `data` urls are treated as a different origin. If `URL.createObjectURL(...)` is used, then Firefox will still be vulnerable. Using `data` urls to create Workers also blocks Broadcast Channel from working within that Worker not just the eval. 

You can check out a demo of this vulnerability on Codepen: https://codepen.io/okikio/pen/vYRvqRy


> **Note**: this affects all browser vendors as of August 2nd, 2022 EST
> * Edge & Chrome: 103.0.1264.77 & 104.0.5112.79
> * Safari & Safari Technoloy Preview: 15.6 (17613.3.9.1.5) & 150 (Safari 16.0, WebKit 17614.1.22.1.2)
> * Firefox: 103.0.1  

^ This most-likely also affects older browsers, but I have not yet confirmed this

