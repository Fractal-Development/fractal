/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

// Listen for our libraries in their respective folder inside the monorepo
const fractalUI = path.resolve(__dirname + '/../../packages/fractal-ui');
const fractalUIEXampleFragmentsPath = path.resolve(__dirname + '/../fractal-ui-example-fragments');

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true
            }
        })
    },
    resolver: {
        extraNodeModules: new Proxy(
            {
                'fractal-ui-example-fragments': fractalUIEXampleFragmentsPath,
                '@bma98/fractal-ui': fractalUI
            },
            {
                // This will resolve all dependencies using React to the one inside our node_modules
                // Is similar to webpack's config.resolve.alias['react']
                get: (target, name) => {
                    if (target.hasOwnProperty(name)) {
                        return target[name];
                    }
                    return path.join(__dirname, `node_modules/${name}`);
                }
            }
        )
    },
    watchFolders: [fractalUIEXampleFragmentsPath, fractalUI]
};
