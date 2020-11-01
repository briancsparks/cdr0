# cdr0
Monorepo for cdr0 org

## Commands

To do various things, do these.

#### Run NPM Scripts

Generally, append `lerna` to the command you want to do.

```sh
# Run a development server for the summon project (from root)
lerna run dev --scope summon
```

#### Reset

This will remove all intermediate files, and rebuild everything.

```sh
# From root
lerna clean && lerna link && lerna bootstrap
```

## Setup

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

