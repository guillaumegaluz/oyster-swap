# 🛒 From exchanges to AMMs

*4 min read*

### Goods and barter

Picture yourself in Mesopotamia in 1500BC. The local economy is mostly organized around raising goats (for food) and producing salt (for preserving food). The goat farmers have lots of goats but they need salt to preserve the goat meat. The salt producers have lots of salt but they need meat to feed their family. Both need each other.

Let's make this personal and assume you're a goat farmer: you have goats and need salt. You take two of your goats and walk to the town square searching for your salt mate: someone who is willing to give you salt in exchange for your goats. They sit there all day and ask everyone who passes by if they sell salt; if yes, do they need goats; if yes, how many goats would thet want for the amount of salt you're looking for. You have to track of all this information until you find your match. You do this every day. Surely someone can come up with a better system?

### Centralized marketplaces

Now let's imagine your friend doesn't care about raising goats or producing salt. Instead they're of a different breed: they're a merchant. They sit a few blocks away from the town square and maintain a piece of paper that has two columns: one column contains all the people who want to **buy** salt for goats and how much of each they are ok trading. The other column contains all the people who want to **sell** salt for goats (and how much of each they are ok trading). One column lists the potential buy requests and the other the potential sell requests. Buyers and sellers don't have to walk around talking to each other. They just give the information to the merchant who aggregates all of it.

Whenever the merchant find two orders (one in each column) that match on quantity and price, that's a bingo!

![Bingo](https://thumbs.gfycat.com/UnacceptablePleasingElver-max-1mb.gif)

The merchant executes the `swap`: Alice gives the merchant their goats and Bob gives them their salt. Then the merchants give the salt to Bob and the goats to Alice. Everyone gets _what_ they want, at the price they wanted it. The merchant takes a fee for executing this trade and strikes through the lines in their columns (which is refered to as an `order book`). They move on to the next and keep doing this work of greasing the wheels of the market-based economy.

So this merchant (or centralized exchange) acts as both the source of authority (they know who needs what, how much, etc - and what are the prices) and a source of trust (two parties don't need to know or trust each other, only their intermediairy). What if we could imagine a way to allow this trustless trade at scale without an intermediairy?

### Decentralized markets and AMMs

That's what decentralized exchange (DEX) allow you to do using the blockchain: trades happen directly between users. If you sell ETH for USDC, there’s someone else on the other side of the trade buying ETH with their USDC. It's a peer-to-peer transaction. But you still need a counterpart to be able to make a trade, which can be a problem if the market is "illiquid". The centralized exchange could act as the counterpart themself (if you want to buy they would act as the seller and vice versa). They would thus become the market maker: creating liquidity when there is none. But that means taking on risk: they have no guarantee that whatever they are left with could be sold. What if there was a way to allow this to work without the need for a market maker?

If a CEX is _peer-to-exchange-to-peer_ and a DEX is _peer-to-peer_, you could think of an AMMs as _peer-to-contract_. There’s no need for counterparties in the traditional sense, as trades happen between users and contracts. The contract posseses all the reserves of funds necessary to provide peers to trade against. That's why AMMs are automatic market makers.

Where do those tokens come from?  
How does a trade work in practice?  

We still have some questions unresolved. We'll explore them as we go along.