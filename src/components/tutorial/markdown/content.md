# Solana Swap Tutorial

*Let's warm up with some React basics*

We're not going to dive into how React works, there are a lot of great places for this. Instead we'll assume you understand the basics of React and just cover the app's flow quickly

Like any web page, everything starts with an HTML document. It's in `public/index.html` and includes the root element of our DOM, the ancestor of all HTML elements: `<div id="root">`. React will compile our Javascript code to HTML and inject it inside the "root".

By convention, we tell React to find the Javascript code through the entry point: `src/index.tsx` which (among other things) renders the `<App />` component which lives at `src/app.tsx`.