# Connecting a wallet

## Users are dead! Long live wallets!

Let's look at `components/exchange.tsx` and in particular to `TopBar` (line 37). Some of the logic should be familiar to Web 2 developers who have implemented authentication before (_naming below varies_):  

* inside a header navigation component...
* call a custom hook like `useAuth`...
* which exposes a boolean `authenticated` and a `user` object...
* and based on those render SignUp/LogIn buttons or username.

Well in Web 3, we replace `users` by `wallets` and instead of "signing up" or "logging in", users will "connect a wallet". The custom hook `useWallet` exposes a `connected` boolean and a `wallet` object which can be used by components. And the logic looks like:

```
const { connected, wallet } = useWallet();

render (
  <>
    {connected && ...}
    {!connected && ...}
  </>
)
```

When no wallet has been connected the top bar should look like this:

![Not Connected](https://p26.f0.n0.cdn.getcloudapp.com/items/JruDkxO5/69d0bfdb-5719-411b-b344-176138cfac3a.png?source=viewer&v=5953348795a687c32f7dc569cd788de0)

Once you've connected an existing wallet (or created one, we will skip bith this in the tutorial, it's mostly following instructions) the magic of React state and Javascript conditionals should lead you to see:

![Connected](https://p26.f0.n0.cdn.getcloudapp.com/items/Kou40Jjx/a965a119-0b18-4617-9751-1b950f0faaad.png?source=viewer&v=3a909bb722ebbcb60df421af1b0c118a)

## Transfering SOL

The following section will assume you have SOL tokens (if you don't you can buy some on Binance).

We now need to transfer those tokens to the wallet that we have connected. If you have already transfered tokens in the past you know that what you need is the public address of the recipient's wallet. How can you find your wallet's public key? (Hint: In the screenshot above we can what looks like part of a public key...)

<Action
  title="Find the wallet's public key"
  content={The public key is cropped in "components/accountInfo.tsx". Line 15, print out the whole string by adding: console.log(wallet.publicKey.toBase58())}
/>

One thing interesting to notice is that if you run `console.log(wallet.publicKey)` you will get back a Javascript BN (Big Number) object. TO "decode" it to a string, you can use `.toBase58()`. That's a very common thing in Web 3: Javascript number cannot natively handle the requirements of public key cryptography so BN (and some other libraries) are used to overcome this.

Now that yopu have your wallet's public key, deposit some SOL tokens in the wallet. Your top bar should look like this:

![Funded](https://p26.f0.n0.cdn.getcloudapp.com/items/JruDkx2Q/375f2bd4-deed-44ca-96cb-380c1a9c2ea9.png?source=viewer&v=07cbb91ce496d3e6feaaf517ce8c6ed2)