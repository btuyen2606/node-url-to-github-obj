# Url to github object on Nodejs
A module for node.js and browsers that extracts useful properties like user, repo, and branch from various flavors of GitHub URLs.

**Example usage**

```js
const github_url = 'https://github.com/example/business/blob/nachos'
const github_object = github_url_to_object(github_url)
console.log(github_object)
```

