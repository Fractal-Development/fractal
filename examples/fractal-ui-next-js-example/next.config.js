const withTM = require('next-transpile-modules')(['@bma98/fractal-charts', '@bma98/fractal-examples', '@bma98/fractal-ui', '@bma98/size-class']);

module.exports = withTM({
    reactStrictMode: true,
    webpack: (config) => {
        return config;
    }
});
