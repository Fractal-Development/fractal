import React from 'react';
import { Platform, StatusBar as RNStatusBar } from 'react-native';
import { useThemeIdentifier } from '../../context/hooks/useThemeIdentifier';

export function StatusBar(): JSX.Element {
    const currentThemeIdentifier = useThemeIdentifier();

    if (Platform.OS === 'android') {
        return <RNStatusBar barStyle='light-content' />;
    } else {
        return <RNStatusBar barStyle={currentThemeIdentifier === 'light' ? 'dark-content' : 'light-content'} />;
    }
}
