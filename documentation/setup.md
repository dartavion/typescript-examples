#### Project Setup

```
mkdir typescript-examples

git init

npm init

npm i mocha chai sinon @types/mocha @types/chai @types/sinon -D

npm i chalk cross-env jsdom jsdom-global -D

```

Add this to the test script in your package.json

```
"test": "cross-env TS_NODE_COMPILER_OPTIONS='{ \"module\": \"commonjs\" }' mocha -r ts-node/register -r ignore-styles -r jsdom-global/register src/**/*.spec.ts"

```