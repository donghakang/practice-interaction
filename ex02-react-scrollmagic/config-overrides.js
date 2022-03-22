// config-overrides.js

const {
    useBabelRc,
    removeModuleScopePlugin,
    override,
  } = require('customize-cra')
  
  module.exports = override(useBabelRc(), removeModuleScopePlugin())
  // .babelrc
  
  {
    "plugins": [
      [
        "@emotion/babel-plugin-jsx-pragmatic",
        {
          "export": "jsx",
          "import": "__to_avoid_prepending_/** @jsxImportSource @emotion/react */",
          "module": "@emotion/react"
        }
      ],
      [
        "@babel/plugin-transform-react-jsx",
        {
          "pragma": "__to_avoid_prepending_/** @jsxImportSource @emotion/react */"
        }
      ]
    ]
  }