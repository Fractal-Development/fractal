import { useTheme } from '@bma98/fractal-ui';

export function useNavigationRouteStyles(style: any): any {
    const theme = useTheme();

    return { backgroundColor: theme.colors.background, width: '100%', flex: 1, ...style };
}
