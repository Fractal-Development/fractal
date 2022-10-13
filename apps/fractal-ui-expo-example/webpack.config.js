const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '../..');
const projectRoot = __dirname;

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    config.resolve.modules = [path.resolve(projectRoot, 'node_modules'), path.resolve(workspaceRoot, 'node_modules')];
    config.resolve.alias['framer-motion'] = path.join(workspaceRoot, `node_modules/framer-motion/dist/framer-motion`);

    return config;
};
