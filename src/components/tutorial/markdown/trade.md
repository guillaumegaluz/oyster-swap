# 🤝 Trade

The emoji above is actually misleading! It implies that a trade happens between two users/wallets but it doesn't! It happens between a wallet and a smart contract. There's just no emoji for this yet...

Anyway, next we'll look at the left tab called "Trade". This is where a user (after connecting a wallet) will be able to execute a trade (or _swap_) between two tokens. The UI is pretty self explanatory and for anyone who's seen Uniswap before it should look very familiar: you pick a token you want to trade in, the token you want to get back and an amount. 

Pick SOL as the first currency and let's say USDC as the second one. For the amount of SOL, pick something lower than what you've deposited in your SOL wallet. The UI should automatically calculate the amount of USDC you will get. This is using the same mechanism as we saw for Pool: `<TradeEntry>`, just like `<AddToLiquidity />` use the same custom hook `useCurrencyPairState()` (where `calculateDependentAmount()` is implemented)

Once you've picked two tokens and an amount, the button should automatically change to "Swap":

![Swap](https://p26.f0.n0.cdn.getcloudapp.com/items/YEuZgrzO/70640f47-b90d-4325-ba87-679366e4ed93.png?source=viewer&v=c0ff3ba265fd81972d75f7f428934b55)

Ok we're ready to pull the trigger!  

Click on the Swap button.  

Open your eyes.  

Nothing happened.  

Actually there's an error at the bottom left of the page.  

It's us (again). We tweaked the transaction code and forgot to sign the transaction. Can you fix this?

**Hint**: [This](https://github.com/project-serum/sol-wallet-adapter) will help you figure out how to sign a transaction using the private keys that are in your wallet

<Action
  title="Sign the swap transaction"
  content={In utils/connection.tsx, add "transaction = await wallet.signTransaction(transaction);" line 167 (before serializing)}
/>

Now that you've fixed it, click Swap again (you might have to connect your wallet again). BOOM! It worked.

Let's double check. Use the sam trick we did a couple steps ago and log the `wallet.publicKey.toBase58()` in `accountInfo.tsx`. Paste it inside the [Solana Explorer](https://explorer.solana.com/). You should see your balance of SOL (what's left after the swap) and the USDC you just purchased

![Done](https://p26.f0.n0.cdn.getcloudapp.com/items/nOuPdXzb/d9d7f6cf-a63b-4dfb-81ac-3d0792e5b88e.png?source=viewer&v=bac1d6b8230ed9eb5f7ca88f74877ab3)