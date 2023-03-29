import { useTheme } from '@fractal-software/fractal-ui';

export function useSimpleTabBarItemColor(active: boolean): string {
    const { tabBar, colors } = useTheme();
    return active ? tabBar.tabBarItemText.color : colors.label;
}
