[1]: npmignore

# Npmignore

## Option 1 (Recommended)

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

---
## Option 2 (Not Recommended)
### Step

Create `/.npmignore` file

### Step

Copy [npmignore][1] to `/.npmignore`

### Step

Revise: `/.npmignore` file

### Step

Double-check your work

```bash
tar tvf $(npm pack); rm -rf *.tgz
```
