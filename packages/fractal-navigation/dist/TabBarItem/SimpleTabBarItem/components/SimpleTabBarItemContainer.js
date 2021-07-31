import React, { memo } from 'react';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
import { Pressable } from '@bma98/fractal-ui';
import { useTabBarPosition } from '../../../TabBar/hooks/useTabBarPosition';
export const SimpleTabBarItemContainer = memo(({ children, icon }) => {
    const [widthSizeType] = useWidthSizeGroup();
    const tabBarPosition = useTabBarPosition();
    const flexDirection = tabBarPosition !== 'bottom' ? 'column' : getValueForLargeSizeType(widthSizeType, 'row', 'column');
    return (React.createElement(Pressable, { flexGrow: 1, flexDirection: flexDirection, justifyContent: 'center', alignItems: 'center', minHeight: 48, minWidth: 48, cursor: 'pointer' },
        icon(24),
        children));
});
SimpleTabBarItemContainer.displayName = 'SimpleTabBarItemContainer';
//# sourceMappingURL=SimpleTabBarItemContainer.js.map