import React, { memo, useCallback } from 'react';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
import { Pressable } from '@bma98/fractal-ui';
import { useTabBarPosition } from '../../../TabBar/hooks/useTabBarPosition';
export const SimpleTabBarItemContainer = memo(({ children, icon, onTabPress, tabIdentifier }) => {
    const [widthSizeType] = useWidthSizeGroup();
    const tabBarPosition = useTabBarPosition();
    const flexDirection = tabBarPosition !== 'bottom' ? 'column' : getValueForLargeSizeType(widthSizeType, 'row', 'column');
    const handlePress = useCallback(() => {
        onTabPress === null || onTabPress === void 0 ? void 0 : onTabPress(tabIdentifier);
    }, [onTabPress, tabIdentifier]);
    return (React.createElement(Pressable, { flexGrow: 1, flexDirection: flexDirection, justifyContent: 'center', alignItems: 'center', minHeight: 48, minWidth: 48, cursor: 'pointer', onPress: handlePress },
        icon(24),
        children));
});
SimpleTabBarItemContainer.displayName = 'SimpleTabBarItemContainer';
//# sourceMappingURL=SimpleTabBarItemContainer.js.map