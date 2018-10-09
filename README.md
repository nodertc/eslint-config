# @nodertc/eslint-config

[![npm](https://img.shields.io/npm/v/@nodertc/eslint-config.svg)](https://www.npmjs.com/package/@nodertc/eslint-config)
[![node](https://img.shields.io/node/v/@nodertc/eslint-config.svg)](https://www.npmjs.com/package/@nodertc/eslint-config)
[![license](https://img.shields.io/npm/l/@nodertc/eslint-config.svg)](https://www.npmjs.com/package/@nodertc/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@nodertc/eslint-config.svg)](https://www.npmjs.com/package/@nodertc/eslint-config)

This package provides NodeRTC's .eslintrc as an extensible shared config.

### Usage

1.
```js
npm i -D @nodertc/eslint-config eslint@5 prettier@1
```

2. Add `"extends":"@nodertc"` to your .eslintrc.

Or to your `package.json` file:

```json
{
  "eslintConfig": {
    "extends":"@nodertc"
  }
}
```

### License

MIT, 2018 &copy; Dmitriy Tsvettsikh
