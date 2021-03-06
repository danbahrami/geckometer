# Geckometer

Geckometer is a React component with a simple, flat UI for visualising a value within a data range.

The example React app provided was initialised using [create-react-app](https://github.com/facebookincubator/create-react-app) for speed of setup and state is handled with [Redux](https://github.com/reactjs/redux). Tests are written with [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/) and [Enzyme](https://github.com/airbnb/enzyme).

## Installation

You will need to have create-react-app globally installed on your machine. If you don't already run...
```
npm install -g create-react-app
```

Then from the project root directory run...

```
npm install
```

That's it! you're all set up.

## Scripts

To create a dev build at [http://localhost:3000](http://localhost:3000)

```
npm run start
```

To create a production build

```
npm run build
```

To run tests

```
npm run test
```

## Project structure

```
.
├── src
│   ├── components     # React components and styles
│   ├── redux	       # State management (reducers, actions & utils)
│   ├── index.js       # Entry point for example app
│   └── utils.js       # Utility functions
└── test
│   ├── components     # Component rendering tests
│   ├── redux	       # Reducer logic tests
│   ├── utils          # Utility function tests
│   └── mock.js        # Mock response data
└── ...
```

## What I would have done next

* Although I like the UI of the Geckometer component, I can see that not explicitly displaying the min value is a cause of some confusion. One solution would be instead of having a doughnut chart covering 360°, leave a gap at the top in which the min value will sit.
* I am rather crudely handling the edge case of the min value being higher than the max value. My solution is to simply use the max value as the source of truth in this case, which leads to some confusion in the UI. It may be better to add a custom propType to Geckometer that would throw an error if the min prop is higher than the max prop.
* I have only added tests for the synchronous reducer logic. I made the call that network requests were handled by the surrounding app so were out of scope, but tests would be good to have here.
* With more time, and in the context of a larger project I would move to SCSS, or a JS based styling framework to allow for more modular styles. Currently the styling of the Geckometer component is relatively reliant on the styling of it's context.