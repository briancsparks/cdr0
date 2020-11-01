# Monorepo Notes

This file has some notes on how to work with monorepos in general and this repository
specifically. We use Lerna, without yarn.

* [A good article on using Lerna and Yarn v1](https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d)

## Setup

Here are the commands that bootstrapped this repo.

```shell script
# To get project setup
cd ${SOMEWHERE}/cdr0

npx lerna init --independent
koa2 packages/summon
gi node > .gitignore

git add .
git commit -am first

# Now that it is setup
lerna bootstrap

# Test that Koa Runs
lerna run dev --scope summon
```

## Helpful Commands

* [See Also this article for other lerna commands like `publish`.](https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d)
* [This is also good.](https://medium.com/hy-vee-engineering/creating-a-monorepo-with-lerna-yarn-workspaces-cf163908965d)


#### Run NPM Scripts

Generally, prepend `lerna` to the command you want to run.

```shell script
# Run a development server for the summon project (from root)
lerna run dev --scope summon
```

#### Run a Command in Each Package

```shell script
lerna exec -- npm ls -depth 0
lerna exec -- rm -rf node_modules
```

#### Reset

Wipe out all the magic linking and moving modules around, so you can
have Lerna rebuild the deps from scratch.

```shell script
# From root
lerna clean && lerna link && lerna bootstrap
```

#### Publish the Packages

```shell script
# What has changed?
lerna changed
lerna diff
lerna diff [package]

# Publish a release for packages that have been updated
lerna-publish
```

#### Updating Packages

https://www.npmjs.com/package/lerna-update-wizard

A command line interface for simplifying the process of bulk updating
dependencies across multiple Lerna or Yarn Workspace packages.

```shell script
# Once
npm i -S lerna-update-wizard

# To update
lernaupdate
```

-or-

```shell script
npx lerna-update-wizard
```

