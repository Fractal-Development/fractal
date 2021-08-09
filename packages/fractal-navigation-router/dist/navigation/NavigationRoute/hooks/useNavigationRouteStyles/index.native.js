import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@bma98/fractal-ui';
export function useNavigationRouteStyles(style) {
    const theme = useTheme();
    return useMemo(() => [StyleSheet.absoluteFill, { backgroundColor: theme.colors.background, width: '100%' }, style], [style, theme.colors.background]);
}
//# sourceMappingURL=index.native.js.map