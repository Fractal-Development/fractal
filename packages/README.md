### How do I create a new Fractal library?

We are working on a CLI to make this easy to do.

### Do not add Fractal UI as a direct dependency

It is using context under the hood, if you add it as a dependency, unless you resolve it to use only the one in your node_modules, useTheme will not work as expected.
