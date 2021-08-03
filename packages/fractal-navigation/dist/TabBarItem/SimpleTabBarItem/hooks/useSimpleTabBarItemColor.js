import { useTheme } from '@bma98/fractal-ui';
export function useSimpleTabBarItemColor(active) {
    const { tabBar, colors } = useTheme();
    return active ? tabBar.tabBarItemText.color : colors.label;
}
//# sourceMappingURL=useSimpleTabBarItemColor.js.map