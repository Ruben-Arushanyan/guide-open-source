# Release

## Task Definition Process

### Step

*Optional:*

Create GitHub issue.

> This is optional and you can stop after this step and continue in future.

### Step

Create a task (Trello).

### Step

Write important notes in the task:

- Github issue link
- Important links
- Task description



## Implementation Process

### Step

Create git branch:

`{task_number}-task-short-description`

*Example:* (**35-release-guide**)

### Step

Mention the branch in the task description

### Step

Do all commits to that branch. (update remote git after commit)



## Pull Request Process

### Step

Local test (Optional):

```bash
npm run test
```

### Step

Create Pull request in GitHub

- Title
- Comment
- Assignees (in right side)
- Labels (in right side)

Click **Click pull request** button

> You can stop after this step and continue in future.


### Step

Merge pull request

- Comment
- Test workflows

### Step

- Making sure the `test` workflow went correctly
- Making sure the `website-deploy` workflow went correctly (open website and check console logs)

## Release Process

### Step

Checkout `master` branch

```bash
git pull origin master
```

### Step

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

### Step

```bash
git push origin master
```

### Step

```bash
git push origin tag____name
```

### Step

In Github website **Create a new release**

### Step

- Choose a tag
- Target
- Title
- Description (Generate release notes)

Click **Publish release**

### Step

- Making sure the `npm-publish` workflow went correctly
