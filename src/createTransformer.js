var mdx = require("@mdx-js/mdx");
var babel = require("@babel/core");

createTransformer = function(preMdxParseCallback) {
  return function(src, filename, config, options) {
    let rawMDX = src;

    if (preMdxParseCallback) {
      rawMDX = preMdxParseCallback(rawMDX);
    }

    // Convert .MDX file into JSX
    var rawJSX = mdx.sync(rawMDX);

    // Inject React and MDXTag imports
    var injectedJSX =
      "import React from 'react'; import MDXTag from '@mdx-js/tag/dist/mdx-tag';" +
      rawJSX;

    // Transform ES6 with babel
    var babelRes = babel.transform(injectedJSX, {
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: ["@babel/plugin-proposal-object-rest-spread"]
    }).code;

    return babelRes;
  };
};

module.exports = createTransformer;
