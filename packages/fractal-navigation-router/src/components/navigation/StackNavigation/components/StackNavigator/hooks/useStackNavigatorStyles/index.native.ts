import { useMemo } from 'react';
import { useTabBarInsets } from '@bma98/fractal-navigation';
import { StyleSheet } from 'react-native';

export function useStackNavigatorStyles(style: any) {
    const tabBarInsets = useTabBarInsets();

    return useMemo(() => {
        return [style, StyleSheet.absoluteFill];
    }, [style, tabBarInsets]);
}
