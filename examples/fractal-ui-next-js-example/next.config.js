const withTM = require('next-transpile-modules')(['@bma98/fractal-ui', '@bma98/size-class', '@bma98/fractal-examples']);

module.exports = withTM({
    reactStrictMode: true,
    webpack: (config) => {
        return config;
    }
});
