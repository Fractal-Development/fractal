import React, { memo, useCallback } from 'react';
import { useSimpleTabBarItemColor } from './hooks/useSimpleTabBarItemColor';
import { SimpleTabBarItemContainer } from './components/SimpleTabBarItemContainer';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
import { useTabBarPosition } from '../../TabBar/hooks/useTabBarPosition';
import { Layer, Text, useTheme } from '@bma98/fractal-ui';
const tabBarItemCompactVerticalSpacerSize = { width: 1, height: 4 };
const tabBarItemCompactHorizontalSpacerSize = { width: 0, height: 0 };
const tabBarItemLargeVerticalSpacerSize = { width: 1, height: 4 };
const tabBarItemLargeHorizontalSpacerSize = { width: 8, height: 1 };
export const SimpleTabBarItem = memo(({ active = false, title, children, tabIdentifier, onTabPress }) => {
    const color = useSimpleTabBarItemColor(active);
    const [widthSizeType] = useWidthSizeGroup();
    const tabBarPosition = useTabBarPosition();
    const { tabBar } = useTheme();
    const renderItem = useCallback((size) => {
        return children(color, size);
    }, [color, children]);
    const spacerSize = getValueForLargeSizeType(widthSizeType, tabBarPosition !== 'bottom' ? tabBarItemLargeVerticalSpacerSize : tabBarItemLargeHorizontalSpacerSize, tabBarPosition !== 'bottom' ? tabBarItemCompactVerticalSpacerSize : tabBarItemCompactHorizontalSpacerSize);
    return (React.createElement(SimpleTabBarItemContainer, { tabIdentifier: tabIdentifier, onTabPress: onTabPress, icon: renderItem },
        React.createElement(Layer, Object.assign({}, spacerSize)),
        React.createElement(Text, Object.assign({}, tabBar.tabBarItemText, { numberOfLines: 1, overflow: 'hidden', width: tabBar.iOSHorizontalWidth - 1, display: 'block', variant: 'label', textOverflow: 'ellipsis', textAlign: 'center', color: color }), title)));
});
SimpleTabBarItem.displayName = 'SimpleTabBarItem';
//# sourceMappingURL=index.js.map