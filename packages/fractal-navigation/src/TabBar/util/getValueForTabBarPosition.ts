import { TabBarPosition } from '../types';

export function getValueForTabBarPosition<T>(position: TabBarPosition, bottom: T, left: T, right: T): T {
    switch (position) {
        case 'bottom':
            return bottom;
        case 'left':
            return left;
        case 'right':
            return right;
    }
}
