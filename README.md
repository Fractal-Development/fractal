# Fractal Software Monorepo

## What is this project?

Fractal's monorepo meant to hold all our software that is open source, we are constantly building libraries that are used in multiple projects and we decided to put them all together on a monorepo. We are planning to add unit testing and build a real documentation soon.

## How to clone the project?

```
git clone https://github.com/BrandonMA/fractal.git
```

### Setting up Yarn

Npm:

```
npm install -g yarn
```

Homebrew:

```
brew install yarn
```

We are not done yet, we have to set up our Yarn version to 2.x.x

```
yarn set version berry
```

This will set up your local environment to use Yarn 2.x.x and all the workspaces features will work as expected.

Just one more thing to install, this will install some handy tools to work with workspaces:

```
yarn plugin import workspace-tools
```

### Installing root dependencies

Now you have to install the root dependencies on your project

```
yarn
```

You are almost ready to code, the last thing to take into consideration is that you have to run yarn on whatever package or example you want to work on, this way you will not install dependencies for all project as it can take a big chunk of your storage.

For example if you wanna work with `fractal-ui` and `fractal-ui-expo-example` you can run this two commands on your root folder.

```
yarn workspace @bma98/fractal-ui install
yarn workspace fractal-ui-expo-example install
```

You don't have to do anything else, you can consume `fractal-ui` directly without linking and everything should work as expected, if you make any changes on `fractal-ui` you just have to run:

```
yarn workspace @bma98/fractal-ui build
```

And this will rebuild the library and you will have instant access to your new components, no need to run install again as everything is managed locally by Yarn 😃.
