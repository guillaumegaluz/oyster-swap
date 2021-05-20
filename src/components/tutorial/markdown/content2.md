Once you've opened `src/App.tsx` you'll notice `<Hint step={0} />`. This is what is displaying the hint on the right side of the screen. Comment or delete that line and uncomment the code block below. Not sure how to (un)comment JSX? [Read this.](https://wesbos.com/react-jsx-comments)

We now have a banner (warning us to use this app at our own risk) and a top bar (containing some links, including a way to connect a wallet).

By uncommenting that piece of code inside `<App />` we started a chain of reaction: we rendered `<Col>` and all its children, including a component called `<Routes />`, which itself rendered `<Route exact path="/" component={ExchangeView} />` which itself rendered `<ExchangeView />`!

The HTML DOM is like a tree and rendering it is like starting a the trunk level and travelling towards the leafs.

Now wthe hint on the right is telling us to look at `<ExchangeView />`