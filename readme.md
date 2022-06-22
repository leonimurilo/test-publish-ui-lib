## Overview

This library contains React UI components for Learning platforms.

## Components documentation

https://leonimurilo.github.io/test-publish-ui-lib

## Getting started

Install dependencies

```bash
npm install
```

There are two easy ways to develop and test the library locally:

[Using Storybook](#running-storybook)
[Testing on another app](#testing-locally-on-another-app)

## Contributing

It is recommended to perform standardized commits in repository using commitizen. Its main purpose is not only to define a standard way of committing rules and communicating it, but also providing `semantic-release` library the ability to automatically calculating the next versions of the library (wheter it is a patch, minor or major version) and generating relase notes based on commit history. Because of that it is also **recommended to always rebase and merge** instead of merging with a single merging commit. In other words, semantic-release library will use all of the commits to work, so merging without rebasing would not provide it the commit history necessary.

To commit using the standard, we can use a helper tool:

```bash
npm run commit
```

> That will prompt a few questions and automatically format the commit message that follows the convention.

Alternatively the following vscode plugin can be used as a commit helper: `KnisterPeter.vscode-commitizen`

## Running Storybook

We can run Storybook locally to test and document our components as Stories:

```bash
npm run storybook
```

## Testing locally on another app

### Explanation

In order to test this library in other apps you will be using **Yalc**. Yalc differs from npm link because instead of using symlinks, it creates a copy of the lib inside the target app (like ole-client) root directory, in a folder called .yalc. To push that copy we can use `yalc push` every time we need to update the copy. After that copy is made, the only thing we need to do is to make the package.json of the app to point to the .yalc directory instead of node_modules. Luckly Yalc provides a command for that: `yalc add <package_name>`.

This solution avoids using symlinks which makes it easier for consumer apps that are containerized, since symbolic links on host machines are difficult to deal with when using containers.

### Instructions

#### 1) Install Yalc globally

```bash
npm install -g yalc
```

#### 2) Watch, build and push the built library to Yalc:

In this project we already have a easy way of doing this:

```bash
npm run rollup:watch
```

> Under the hood the command above is watching and building the library, and when that finished, it automatically performs `yalc push`

#### 3) Go to your **app directory** and run the following command (can be added as npm script):

```bash
yalc add leoni-test-publish-ui-lib && npm install
```

> Now your app will have its package.json pointing to the most up to date library build inside .yalc directory.

**Optional:**
You can also configure you app webpack watch options to watch changes made in this package inside node_modules:

```javascript
{
    ...otherWebpackOptions,
    watchOptions: {
        poll: 1000,
        ignored: [
          /node_modules([\\]+|\/)+(?!leoni-test-publish-ui-lib)/,
          /leoni-test-publish-ui-lib([\\]+|\/)node_modules/,
        ],
    },
}
```

> This way every change made in the library will result in the library being rebuilt, push to yalc and then the webpack of the consumer apps will detect the changes and also refresh the application with the most recent library

## How are new versions released?

The library `semantic-release` is being used for that. Every time master branch receives one or more commits, a github action job called `publish-release` will run doing the following:

1. install dependencies
2. build the library using rollup
3. run semantic-release

Semantic release will analyze the commits and decide whether a new version has to be published or not. If a new version needs to be published, the library will find the next appropriate version number based on the commit history, and then release the library by:

- creating a github release describins all the changes
- publishing the library to NPM registry
- updating the changelog file in the repository
- updating package.json version property

Lastly, one more action job runs to build and publish Storybook documentation to github pages.

## NPM Scripts

| Command          | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| rollup           | Uses rollup to compile and build the library into dist directory             |
| rollup:watch     | Same as rollup, but watching files and automatically pushing changes to yalc |
| commit           | Starts commitizen commit helper                                              |
| test             | Runs jest tests                                                              |
| test:watch       | Runs jest tests on watch mode                                                |
| semantic-release | Releases a new version of the app                                            |
| test             | Runs jest tests                                                              |
| build-storybook  | Builds Storybook                                                             |
| storybook        | Starts Storybook for local development                                       |
| start            | Starts Storybook for local development                                       |
| lint             | Run ESLint report                                                            |
| lint:fix         | Run ESLint report and make all possible fixes                                |
| format           | Format code using prettier                                                   |
| yalc:push        | Pushes build to yalc local repository (local development)                    |

## TechStack

This project uses Typescript, Jest, react-testing library, SASS, CSS Modules, Storybook and rollup. ESLint and prettier are also setup.
