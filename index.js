'use strict'

const re = require('re')
var isUrl = require('is-url')

function github_url_to_object(url) {
    // Regular expression to extract user, repo, and branch from GitHub URL
    const pattern = /^https?:\/\/github.com\/([^/]+)\/([^/]+)\/?(?:tree|blob)?\/?(.*)?$/
    const match = url.match(pattern)

    if (match) {
        const user = match[1]
        const repo = match[2]
        const branch = match[3] || 'master'
        const https_url = `https://github.com/${user}/${repo}/blob/${branch}`
        const tarball_url = `https://api.github.com/repos/${user}/${repo}/tarball/${branch}`
        const clone_url = `https://github.com/${user}/${repo}`
        const travis_url = `https://travis-ci.org/${user}/${repo}?branch=${branch}`
        const api_url = `https://api.github.com/repos/${user}/${repo}`
        const zip_url = `https://github.com/${user}/${repo}/archive/${branch}.zip`

        return {
            'user': user,
            'repo': repo,
            'branch': branch,
            'https_url': https_url,
            'tarball_url': tarball_url,
            'clone_url': clone_url,
            'travis_url': travis_url,
            'api_url': api_url,
            'zip_url': zip_url
        }
    } else {
        return null
    }
}
