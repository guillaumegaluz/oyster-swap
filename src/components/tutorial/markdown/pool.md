# Pools

Now that we have SOL tokens in our wallet, what can we do with them? The app's UI wouldn't be more simple: there are two tabs: Trade and Pool. We will start by looking at the second one. But first, a bit of theory...

## Where are the AMM tokens coming from?

In an AMM anyone can make a trade without the need for a counterpart to take the opposite position. The trades are made against a contract which has reserves of tokens to use. For each pair of tokens listed on the AMM imagine there are two jars full of each token. When someone makes a trade they put the token they're swaping in inside its jar and are given the token they want from the other jar. All this is organized by the smart contract which holds all the jars for all the token pairs. So for trading ETH against DAI, there will be a pair of jars. Same for ETH and USCDC, or for SOL and ETH. Each pair of jar is called a **liquidity pool**.

But where does those tokens come from? Anyone can provide tokens to a pool by depositing both token in the jars. If you do this you would be called a **Liquidity Provider (LP)**. And why would you do this? Because as an LP you would earn fees on every trade made through the pool they've provided tokens to! Just like a toll booth on a highway: you take a cut of everyone passing through, to reward you for providing liquidity and creating a market.

## How are prices determined?

And just how much should you provide? The absolute amounts are at your discretion (your fees are proportional to how much you contribute to the pool) but the **_relative_ amounts** are determined by the pool. We won't dive into the specifics of how this works but a good place to start is understnding how [Uniswap](https://uniswap.org/docs/v2/). They were the first to popularize the idea of an AMM and Solana Swap is influenced by it.

For now we'll just say that the amounts of each token in a pool follwo a **curve**. The most famous one is the Uniswp?Balancer one called "constant product", which states that the product of the quantity of token A and token B in the swap have to be constant. Whenever a swap happens, the total quantity of tokens change and the pool will move up or down on that curve. This creates opportunity for arbitrage traders to come in and swap for a better price than in other exchanges. They rebalance the pool. 

## Back to the code

The important thing that we need to understand is that the quantity of each token involved in the swap are determined by the AMM.  So pick two tokens (let's say ETH and SOL) and type in a number in the first input where it says "0.00". Because the two quantities are mathematically linked, if you type an amount for ETH it should automatically calculate how much SOL you also need to provide. But that's not happening...

`<AddToLiquidity />` renders two `<CurrencyInput />` inputs whioch have `onChange` handlers which will call `useState` setters inside the `CurrencyPairProvider`. Hidden within this logic is the `calculateDependentAmount` function (inside `utils/pools/tsx`) that we have changed: we've removed its return statement. Can you add it back? We've logged some useful variables in the console to help.

<Action
  title="Fix calculateDependentAmount's return statement"
  content={Return statement should be "return dependentTokenAmount / depPrecision;"}
/>

Some more explanation of the code here:

Each token has a given supply at any given moment. This amount is pulled from the pool's account (through `cache.getAccount`). From the information that is logged you can see that this `account` object has an address. The `mint` objects is more like the abstraction of a token. We need to pull it too (using the accounts information) to get the number of decimals it needs to be expressed in.

Once we've fixed `calculateDependentAmount` we should see both currencies moving together!

