// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Listen for our libraries in their respective folder inside the monorepo
const fractalAuthScreen = path.resolve(__dirname + '/../../packages/fractal-auth-screen');
const fractalCharts = path.resolve(__dirname + '/../../packages/fractal-charts');
const fractalExamples = path.resolve(__dirname + '/../../packages/fractal-examples');
const fractalMedia = path.resolve(__dirname + '/../../packages/fractal-media');
const fractalMessaging = path.resolve(__dirname + '/../../packages/fractal-messaging');
const fractalNavigation = path.resolve(__dirname + '/../../packages/fractal-navigation');
const fractalNavigationRouter = path.resolve(__dirname + '/../../packages/fractal-navigation-router');
const fractalUI = path.resolve(__dirname + '/../../packages/fractal-ui');

config.resolver = {
    ...config.resolver,
    extraNodeModules: new Proxy(
        {
            '@bma98/fractal-ui': fractalUI,
            '@bma98/fractal-charts': fractalCharts,
            '@bma98/fractal-auth-screen': fractalAuthScreen,
            '@bma98/fractal-examples': fractalExamples,
            '@bma98/fractal-media': fractalMedia,
            '@bma98/fractal-messaging': fractalMessaging,
            '@bma98/fractal-navigation': fractalNavigation,
            '@bma98/fractal-navigation-router': fractalNavigationRouter,
        },
        {
            // This will resolve dependencies on the previous list
            // Is similar to webpack's config.resolve.alias['react']
            get: (target, name) => {
                if (target.hasOwnProperty(name)) {
                    return target[name];
                }

                return path.join(__dirname, `/node_modules/${name}`);
            }
        }
    )
}

config.watchFolders = [
    ...config.watchFolders,
    fractalUI,
    fractalCharts
]

module.exports = config;

