import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export function useStackNavigatorStyles(style: unknown): any {
    return useMemo(() => [style, StyleSheet.absoluteFill], [style]);
}
