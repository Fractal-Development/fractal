import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
export function useStackNavigatorStyles(style) {
    return useMemo(() => [style, StyleSheet.absoluteFill], [style]);
}
//# sourceMappingURL=index.native.js.map