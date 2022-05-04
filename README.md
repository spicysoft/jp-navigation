# Buyer Experience Navigation

**Buyer Experience Navigation** (be-navigation) contains a modular navigation for [about.gitlab.com](https://about.gitlab.com).
- be-navigation is a Vue 2 CLI app that features our implementation of GitLab's marketing website's navigation.

- be-navigation is a collection of navigation components. Currently housing the main navigation and the footer.

- be-navigation uses GitLab's [Slippers UI](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui) design system.

## Getting Started
### Dependencies
- Node - Check .nvmrc for the current node version.

### Local development
Start app: ```npm run serve```

Auto-lint: ```npm run lint```

### Updating NPM package
1. Make changes to be-navigation files
2. Increment the version number in package.json
3. Build /dist folder - ```npm run build-library```
4. Publish to npm - ```npm publish``` (Note: You may need to login with your npm credentials using ```npm login```)
5. Merge changes to origin/main
6. Once the package has been published it's now ready to be updated in the consuming repositories (Example: www, Buyer Experience)

## Installation
be-navigation is available as an [npm package](https://www.npmjs.com/package/be-navigation).

    // with npm
    npm install be-navigation

    // with yarn
    yarn add be-navigation
