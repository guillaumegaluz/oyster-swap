# ⚛️ Architecture

### Overview of the React app

The application that we cloned contains the code that will run on the user's browser (the _client side_ code). The smart contract that it will interact with (once the user makes a request to swap funds of provide liquidity) lives on the blockchain. It has already been deployed and is ready to use.

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

We'll spend most of our time in `components` and `utils`.

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

Starting from `src/App.tsx` follow the path of components rendering until you see a UI that shows the 3 main features of our app:  

- Connect a Wallet (far right of `<TopBar />`)  
- Trade (first tab of `<ExchangeView />`)  
- Pool (second tab of `<ExchangeView />`)  

By doing this you will familiarize yourself with the app's rendering hierarchy: `<App />` which uses a React Router to render one route (`<ExchangeView>`) which contains the `<TopBar />` (where a user can connect a wallet) and a box with two tabs: one to "Trade" and one to "Pool". Each of these tabs rely on a `<CurrencyInput />`

The first few lines of `<CurrencyInput />` show the three main components of the application's state we'll work with: 

- Accounts  
- Mints  
- Pools  

Each of those are made available to the application's components through the two main custom hooks `utils/accounts.tsx` and `utils/pools.tsx`.

Another important custom hook is `utils/wallet.tsx`. Let's look at it next.