const path = require('path');

const withTM = require('next-transpile-modules')([
    '@bma98/fractal-charts',
    '@bma98/fractal-examples',
    '@bma98/fractal-ui',
    '@bma98/size-class',
    '@bma98/fractal-media',
    '@bma98/fractal-messaging',
    '@bma98/fractal-navigation',
    'd3-shape',
    'd3-path'
]);

module.exports = withTM({
    reactStrictMode: true,
    webpack: (config) => {
        // config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules/react');
        // config.resolve.alias['react-dom'] = path.resolve(__dirname, 'node_modules/react-dom');
        // config.resolve.alias['react-virtualized-auto-sizer'] = path.resolve(__dirname, 'node_modules/react-virtualized-auto-sizer');
        return config;
    }
});
