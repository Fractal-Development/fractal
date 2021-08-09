import { useTheme } from '@bma98/fractal-ui';
export function useNavigationRouteStyles(style) {
    const theme = useTheme();
    return Object.assign({ backgroundColor: theme.colors.background, width: '100%', flex: 1 }, style);
}
//# sourceMappingURL=index.js.map