import { useTheme } from '@bma98/fractal-ui';
export function useSimpleTabBarItemColor(active) {
    const { colors } = useTheme();
    return active ? colors.mainInteractiveColor : colors.label;
}
//# sourceMappingURL=useSimpleTabBarItemColor.js.map