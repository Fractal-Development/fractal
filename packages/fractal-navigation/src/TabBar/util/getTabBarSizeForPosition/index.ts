import { TabBarPosition } from '../../types';

export function getTabBarSizeForPosition(position: TabBarPosition, hidden?: boolean): number {
    if (hidden) {
        return 0;
    } else if (position === 'left' || position === 'right' || position === 'bottom') {
        return 61;
    } else {
        return 0;
    }
}
