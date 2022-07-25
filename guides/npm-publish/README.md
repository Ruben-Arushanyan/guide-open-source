[1]: npmignore.md
[2]: npm-publish.yml
[3]: pack.js
[4]: whitelisting-files.md
[5]: publish.js
# NPM Publish

## Packing

- [.npmignore guide][1] (deprecated)
- [whitelisting files guide][4] (deprecated)
### Step

`package.json` add:

```json
"files": []
```

*(Recommended: Add after `scripts` field)*

### Step

Add all paths: `"files": []`

Examples:

```json
"files": [
    "package.json",
    "README.md",
    "CHANGELOG",
    "LICENSE",
    "dist/."
]
```
### Step

Pack script

Create  `/scripts/pack.js` file

### Step

Copy [pack.js][3] to `/scripts/pack.js`

### Step

`package.json`

Add script:

```json
"scripts": {
    "pack": "npm run build --if-present; node scripts/pack.js"
}
```

### Step

Double-check your work

```bash
npm run pack
```
check: `/.packed` folder


## Publish

### Step

Npm Publish

Create  `/scripts/publish.js` file

### Step

Copy [publish.js][5] to `/scripts/publish.js`

### Step

`package.json`

Add script:

```json
"scripts": {
    "publish": "npm run pack --if-present; node scripts/publish.js"
}
```


## NPM Publish Workflow
### Step

NPM Publish Workflow for Github Actions

Create  `/.github/workflows/npm-publish.yml` file

### Step

Copy [example][2] to `/.github/workflows/npm-publish.yml`

### Step

Revise: `/.github/workflows/npm-publish.yml`

