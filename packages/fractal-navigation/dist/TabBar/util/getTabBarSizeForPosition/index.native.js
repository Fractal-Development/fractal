import { Platform } from 'react-native';
export function getTabBarSizeForPosition(position, hidden) {
    if (hidden) {
        return 0;
    }
    else if (Platform.OS === 'ios' && position === 'bottom') {
        return 49;
    }
    else {
        return 61;
    }
}
//# sourceMappingURL=index.native.js.map