# jest-mdx-loader

Jest transformer that wraps mdx-js/mx webpack loader

## Install

```
yarn add --dev jest-mdx-loader
```

## Usage

Install jest-mdx-loader and then add it to your jest.config.js under transform:

```js
/// jest.config.js

module.exports = {
  //...
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    ".mdx?$": "jest-mdx-loader"
  }
  //...
};
```

If you need to perform any additional pre-processing prior to parsing with mdx you can easily extend the loader as follows:

```js
// src/my-custom-jest-mdx-loader.js

const createTransformer = require("jest-mdx-loader/src/createTransformer");

preMdxParseCallback = function(src) {
  var modifiedSrc = src;

  // CUSTOM LOGIC HERE

  return modifiedSrc;
};

module.exports = {
  process: createTransformer(preMdxParseCallback)
};
```

```js
/// jest.config.js

module.exports = {
  //...
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    ".mdx?$": "<rootDir>/src/my-custom-jest-mdx-loader.js"
  }
  //...
};
```

## Licence

MIT © [Joseph Black](https://josephconradblack.com)
