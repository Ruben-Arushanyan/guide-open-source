[1]: npmignore.md
[2]: npm-publish.yml
[3]: to-pack.js
[4]: whitelisting-files.md
[5]: to-npm-publish.js
# NPM Publish

## Packing

- [.npmignore guide][1] (deprecated)
- [whitelisting files guide][4] (deprecated)
### Step

`package.json` add:

```json
"packableFiles": []
```

*(Recommended: Add after `scripts` field)*

### Step

Add all paths: `"packableFiles": []`

Examples:

```json
"packableFiles": [
    "package.json",
    "README.md",
    "CHANGELOG",
    "LICENSE",
    "dist/."
]
```
### Step

Pack script

Create  `/scripts/to-pack.js` file

### Step

Copy [to-pack.js][3] to `/scripts/to-pack.js`

### Step

`package.json`

Add script:

```json
"scripts": {
    "to-pack": "npm run build --if-present; node scripts/to-pack.js"
}
```

### Step

Double-check your work

```bash
npm run to-pack
```
check: `/.packed` folder


## Publish

### Step

Npm Publish

Create  `/scripts/to-npm-publish.js` file

### Step

Copy [to-npm-publish.js][5] to `/scripts/to-npm-publish.js`

### Step

`package.json`

Add script:

```json
"scripts": {
    "to-npm-publish": "npm run to-pack --if-present; node scripts/to-npm-publish.js"
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

