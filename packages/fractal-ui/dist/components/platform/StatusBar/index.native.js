import React from 'react';
import { Platform, StatusBar as RNStatusBar } from 'react-native';
import { useThemeIdentifier } from '../../../context';
export function StatusBar() {
    const currentThemeIdentifier = useThemeIdentifier();
    if (Platform.OS === 'android') {
        return React.createElement(RNStatusBar, { barStyle: 'light-content' });
    }
    return React.createElement(RNStatusBar, { barStyle: currentThemeIdentifier === 'light' ? 'dark-content' : 'light-content' });
}
//# sourceMappingURL=index.native.js.map