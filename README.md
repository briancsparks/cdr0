# cdr0
Monorepo for cdr0 org

## Commands

To do various things, do these.

[See Also this article](https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d)
for other lerna commands like `publish`. [This is also good.](https://medium.com/hy-vee-engineering/creating-a-monorepo-with-lerna-yarn-workspaces-cf163908965d)


#### Run NPM Scripts

Generally, append `lerna` to the command you want to do.

```sh
# Run a development server for the summon project (from root)
lerna run dev --scope summon
```

#### Run Any Command in each Package

```shell script
lerna exec -- npm ls -depth 0
lerna exec -- rm -rf node_modules
```

#### Reset

This will remove all intermediate files, and rebuild everything.

```sh
# From root
lerna clean && lerna link && lerna bootstrap
```

#### Updating Packages

https://www.npmjs.com/package/lerna-update-wizard

Command line interface for simplifying the process of bulk updating dependencies across multiple Lerna or Yarn Workspace packages.



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

## Setup

I already had it setup to use NPM, but then found a good article on Lerna and
Yarn v1.

https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d

To setup the original project (just summon).

```sh
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

