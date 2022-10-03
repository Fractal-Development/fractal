module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'react-native-reanimated/plugin'
            // [
            //     'module-resolver',
            //     {
            //         root: ['.'],
            //         resolvePath(sourcePath, currentFile, opts) {
            //             if (
            //                 sourcePath === 'react-native' &&
            //                 currentFile.includes('node_modules') &&
            //                 currentFile.includes('react-native-gesture-handler') === false &&
            //                 currentFile.includes('node_modules\\react-native\\') === false
            //             ) {
            //                 return path.resolve(__dirname, 'resolver/react-native');
            //             }
            //             return undefined;
            //         }
            //     }
            // ]
        ]
    };
};
