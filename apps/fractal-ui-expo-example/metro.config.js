// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const exclusionList = require("metro-config/src/defaults/exclusionList");
const { getMetroTools } = require("react-native-monorepo-tools");
const monorepoMetroTools = getMetroTools();
const path = require('path');

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

config.watchFolders = monorepoMetroTools.watchFolders;
config.resolver.blockList = exclusionList(monorepoMetroTools.blockList);
config.resolver.extraNodeModules = {
    ...monorepoMetroTools.extraNodeModules,
    'react-native-webview': path.resolve(__dirname + '/node_modules/react-native-webview'),
};

module.exports = config;
