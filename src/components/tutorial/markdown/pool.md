# Pools and Providing Liquidity

Once you found `<ExchangeView />`, uncomment the code to reveal the main party of the UI. That component has two tabs, one for trading (swapping tokens) and one for pools (providing liquidity).

Pull the thread of the React rendering logic to reveal the content of the second tab called _Pool_.

**HINT!** *Hit Cmd + A on your keyboard to reveal the hint* 

> Check "tabList" in "ExchangeView"

This tab is where a user will be able to provide liquidity to a pool. Providing liquidity is a key concept of an AMM so let's pause on the code and explain what it means.

### Providing liquidity

In an AMM anyone can make a trade without the need for a counterpart to take the opposite position. The trades are made against a contract which has reserves of tokens to use. For each pair of tokens listed on the AMM imagine there are two jars full of each token. When someone makes a trade they put the token they're swaping in inside its jar and are given the token they want from the other jar. All this is organized by the smart contract which holds all the jars for all the token pairs. So for trading ETH against DAI, there will be a pair of jars. Same for ETH and USCDC, or for SOL and ETH. Each pair of jar is called a liquidity pool.

But where does those token come from? Anyone can provide tokens to a pool by depositing both token in the jars. If you do this you would be called a Liquidity Provider (LP). And why would you do this? Because as an LP you would earn fees on every trade made through the pool they've provided tokens to! Just like a toll booth on a highway: you take a cut of everyone passing through, to reward you for providing liquidity and creating a market.

And just how much should you provide? The absolute amounts are at your discretion and depend on how much you can provide (your fees are proportional to how much you contribute to the pool). But the _relative_ amounts are determined by the AMM. They are linked to the price of the two tokens you're providing. If you're providing SOL and ETH and the current price of SOL is 0.01 ETH, you will need to provide 100 SOL for every ETH.

### Back to the code

Once you've uncommented the `<AddToLiquidity />` you should see the following UI under the "Pool" tab. 

![Pool](https://p26.f0.n0.cdn.getcloudapp.com/items/7Kuo44gD/af8ea44a-c6e6-43fd-a806-221205e21057.gif?source=viewer&v=f957c13ffb482d7e64f862315607b2ed)

By clicking on the caret icon you can select tokens through the dropdown. But you probably noticed that only one token appear: SOL. Our exchange would be pretty useless if we can use only one token... Can you make the other token appear?

<Action
  title="Fix the token list loading"
  content={In "src/components/currencyInput/index.tsx" tokens are loaded from a static file into a variable called "PopularTokens". Change the code so we don't only show the first one but the whole list}
/>

Nice! Notice that the tokens were loaded from a local file, and not from a remote API. Now we can see all the tokens. Pick two (let's say ETH and SOL) and type in a number where it says 0.00. We explained above that the relative amounts are determined by the AMM depending on the current market price of the two tokens. So if you type an amount for ETH, it should automatically calculate how much SOL you also need to provide. But that's not happening... That's because we changed the code.

<Action
  title="Fix the amount calculation"
  content={Look for "calculateDependentAmount". Last line should be "return dependentTokenAmount / depPrecision;"}
/>






















Next, we'll look at the left tab called Trade. This is where a user will be able to execute a trade (or _swap_) between two tokens. The UI is pretty self explanatory and for anyone who's seen Uniswap before it should look very familiar: you pick a token you want to trade in, the token you want to get back and the amount of one of them.

It doesn't matter which one you fill in: depending on which one you type in and the current rate, the code will figure out the amount you will receive or have to give

