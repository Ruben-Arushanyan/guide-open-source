# Test

### Step

Create  `/scripts/test.js` file

### Step

Copy [test.js](test.js) to `/scripts/test.js`

### Step

Revise: `/scripts/test.js`

Examples:

```js
const test = async () => {
    await execPromise(`
        npx jest test/
  `)
}
```

### Step

`package.json`

Add script:

```json
"scripts": {
    "test": "npm run to-pack --if-present; node scripts/test.js"
}
```

### Step

Test Workflow for Github Actions

Create  `/.github/workflows/test.yml` file

### Step

Copy [example](test.yml) to `/.github/workflows/test.yml`

### Step

Revise: `/.github/workflows/test.yml`
