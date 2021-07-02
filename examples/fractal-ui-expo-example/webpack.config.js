const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    console.log(config.resolve.alias);
    config.resolve.alias['@bma98/fractal-ui'] = path.resolve(__dirname, 'node_modules/@bma98/fractal-ui');
    console.log(config.resolve.alias);
    return config;
};
