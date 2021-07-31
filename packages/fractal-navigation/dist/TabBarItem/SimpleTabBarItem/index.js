import React, { memo, useCallback } from 'react';
import { useSimpleTabBarItemColor } from './hooks/useSimpleTabBarItemColor';
import { SimpleTabBarItemContainer } from './components/SimpleTabBarItemContainer';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
import { useTabBarPosition } from '../../TabBar/hooks/useTabBarPosition';
import { Layer, Text } from '@bma98/fractal-ui';
const tabBarItemCompactSpacerSize = { width: 0, height: 0 };
const tabBarItemLargeSpacerSize = { width: 8, height: 1 };
export const SimpleTabBarItem = memo(({ active = false, title, children, tabIdentifier, onTabPress }) => {
    const color = useSimpleTabBarItemColor(active);
    const [widthSizeType] = useWidthSizeGroup();
    const tabBarPosition = useTabBarPosition();
    const renderItem = useCallback((size) => {
        return children(color, size);
    }, [color, children]);
    const spacerSize = tabBarPosition !== 'bottom'
        ? tabBarItemCompactSpacerSize
        : getValueForLargeSizeType(widthSizeType, tabBarItemLargeSpacerSize, tabBarItemCompactSpacerSize);
    return (React.createElement(SimpleTabBarItemContainer, { tabIdentifier: tabIdentifier, onTabPress: onTabPress, icon: renderItem },
        React.createElement(Layer, Object.assign({}, spacerSize)),
        React.createElement(Text, { variant: 'label', color: color }, title)));
});
SimpleTabBarItem.displayName = 'SimpleTabBarItem';
//# sourceMappingURL=index.js.map