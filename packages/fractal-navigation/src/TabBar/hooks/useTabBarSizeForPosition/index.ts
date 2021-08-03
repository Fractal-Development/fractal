import { useTheme } from '@bma98/fractal-ui';
import { TabBarPosition } from '../../types';

export function useTabBarSizeForPosition(position: TabBarPosition, hidden?: boolean): number {
    const { tabBar } = useTheme();

    if (hidden) {
        return 0;
    } else if (position === 'bottom') {
        return tabBar.verticalHeight;
    } else if (position === 'left' || position === 'right') {
        return tabBar.horizontalWidth;
    } else {
        return 0;
    }
}
