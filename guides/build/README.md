# Build

### Step

Create `/babel.config.js` file.

### Step

Define *babel.config.js* file.

Examples:

> JavaScript

```bash
npm install --save-dev @babel/cli @babel/core @babel/preset-env
```
```js
module.exports = { 
    presets: [
        '@babel/preset-env',
    ],
}
```

> ReactJS
```bash
npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/preset-react
```
```js
module.exports = { 
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
    ],
}
```

### Step

Create  `/scripts/build.js` file

### Step

Copy [build.js](build.js) to `/scripts/build.js`

### Step

`package.json`

Add script:

```json
"scripts": {
    "build": "node scripts/build.js"
}
```

