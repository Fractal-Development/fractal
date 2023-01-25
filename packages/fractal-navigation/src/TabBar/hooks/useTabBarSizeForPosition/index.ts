import { useTheme } from '@fractal/fractal-ui';
import { TabBarPosition } from '../../types';

export function useTabBarSizeForPosition(position: TabBarPosition, hidden?: boolean): number {
    const { tabBar } = useTheme();

    if (hidden) {
        return 0;
    }
    if (position === 'bottom') {
        return tabBar.verticalHeight;
    }
    if (position === 'left' || position === 'right') {
        return tabBar.horizontalWidth;
    }
    return 0;
}
