const path = require('path');

const withTM = require('next-transpile-modules')(['@bma98/fractal-ui', '@bma98/size-class', 'fractal-examples']);

module.exports = withTM({
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules/react');
        config.resolve.alias['react-dom'] = path.resolve(__dirname, 'node_modules/react-dom');
        config.resolve.alias['react-virtualized-auto-sizer'] = path.resolve(__dirname, 'node_modules/react-virtualized-auto-sizer');
        return config;
    }
});
