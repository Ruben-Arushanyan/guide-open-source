# Whitelisting files with the files array

<https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish>

### Step

`package.json` add:

```json
"files": []
```

*(Recommended: Add after `scripts` field)*

### Step

Revise: `"files": []`

Examples:

```json
"files": [
    "dist/*"
]
```

### Step

Double-check your work

```bash
tar tvf $(npm pack); rm -rf *.tgz
```
