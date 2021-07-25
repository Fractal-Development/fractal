import { Platform } from 'react-native';
import { TabBarPosition } from '../../types';

export function getTabBarSizeForPosition(position: TabBarPosition, hidden?: boolean): number {
    if (hidden) {
        return 0;
    } else if (Platform.OS === 'ios' && position === 'bottom') {
        return 49;
    } else {
        return 61;
    }
}
