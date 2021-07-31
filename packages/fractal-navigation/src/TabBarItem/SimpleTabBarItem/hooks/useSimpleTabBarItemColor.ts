import { useTheme } from '@bma98/fractal-ui';

export function useSimpleTabBarItemColor(active: boolean): string {
    const { colors } = useTheme();
    return active ? colors.mainInteractiveColor : colors.label;
}
