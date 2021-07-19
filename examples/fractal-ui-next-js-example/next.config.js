const withTM = require('next-transpile-modules')([
    '@bma98/fractal-charts',
    '@bma98/fractal-examples',
    '@bma98/fractal-ui',
    '@bma98/size-class',
    '@bma98/fractal-media',
    '@bma98/fractal-messaging',
    'd3-shape',
    'd3-path'
]);

module.exports = withTM({
    reactStrictMode: true,
    webpack: (config) => {
        return config;
    }
});
