# Architecture

### Overview of the React app

The application that we cloned contains the code that will run on the user's browser (the _client side_ code). The smart contract that it will interact with (once the user makes a request to swap funds of provide liquidity) lives on the blockchain. It has already been deployed and is ready to use. The client side code is written with React. We're not going to dive into how React works, there are a lot of great places for this. Instead we'll assume you understand the basics of React and just cover the app's flow quickly.

*provide link to react docs*

Most of the app's code is written inside the `src` folder which has 3 subfolders:

```
root
├── src
│   └── components
│   └── models
│   └── utils
│── package.json
│── .env
│── .gitignore
```

- `components` contains file that render markup
- `models` contains Typescript definitions
- `utils` contains business logic like data fetching, custom hooks, caching, etc

We'll spend most of out time in `components` and `utils`.

### Uncomment the first hint

Like any web page, everything starts with an HTML document. It's in `public/index.html` and includes the root element of our DOM, the ancestor of all HTML elements: `<div id="root">`. React will compile our Javascript code to HTML and inject it inside the "root". By convention, we tell React to find the Javascript code through the entry point: `src/index.tsx` which (among other things) renders the `<App />` component which lives at `src/app.tsx`.


<Tip
  title="What is .tsx?"
  content={`The extension <code>.tsx</code> is a port manteau between <code>.js</code> (a normal Javascript file),
        <code>.jsx</code> (we had "x" when the js file renders JSX content),
        <code>.ts</code> (when the Javascript code is written through Typescript).
      When you put all three concepts together you get <code>.tsx</code>`}
  }
/>

Once you've opened `src/App.tsx` you'll notice the piece of code below:

```
{/* COMMENT ME */}
<Hint step={0} />

{/* AND UNCOMMENT ME */}
{/* <Col span="16">
  <div className="Banner">
    <div className="Banner-description">
      Swap is unaudited software. Use at your own risk.
    </div>
  </div>
  <Routes />
</Col> */}
```

This is what is displaying the hint on the right side of the screen. Comment or delete that line and uncomment the code block below.

<Tip
  title="Not sure how to (un)comment JSX?"
  content="https://wesbos.com/react-jsx-comments"
/>

We now have a banner (warning us to use this app at our own risk as we'll be manipulating real money) and a top bar (including a way to connect a wallet).

Now the hint on the right is telling us to look at `<ExchangeView />`. Find that component and hit Next below.

