# Solana Swap Tutorial

## Getting started

To help you explore and understand the codebase we've made this tutorial as engaging as possible.

We commented/altered some critical parts of the code and right now the app is not functional. We'll point you to the places where we've made those changes and we'll help make the necessary changes to make the app work again.

Throughout the tutorial you will see alerts like this one below. It will tell you what to do and - if you are stuck and want the answer - you can always expand it to see the answer. Try it out:

<Action
  title="Your turn to do something!"
  content={This is where the answer will be if you're stuck}
/>

Sometimes you will just find a tip or resource. They will look this:

<Tip
  title="Need a refresher on React Hooks?"
  content={Learn here: https://reactjs.org/docs/hooks-intro.html}
  }
/>

## Who is this for?

This tutorial is for developers with a solid understand of Javascript/React who are curious about blockchain/DeFi and want to see how an AMM (_a la Uniswap_) works under the hood. If you don't know what React's functional components, hooks or context are you should learn those before going through this! Typescript experience will be useful but is not required.

## Content

Here's what we will cover:

1. **Getting started** (you are here)
2. **A brief overview of AMMs**
3. **How the app is architectured**
4. **Pools and Liquidity Providers**
3. **Swaps**

Before we dive into the code let's take a few minutes to talk about exchanges...