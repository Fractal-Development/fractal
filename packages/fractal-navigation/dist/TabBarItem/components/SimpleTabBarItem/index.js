var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { memo, useCallback } from 'react';
import { useSimpleTabBarItemColor } from './hooks/useSimpleTabBarItemColor';
import { SimpleTabBarItemContainer } from './components/SimpleTabBarItemContainer';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
import { useTabBarPosition } from '../../../TabBar/hooks/useTabBarPosition';
import { Layer, spacings, Text, useTheme } from '@bma98/fractal-ui';
import { justifyContent } from './util/justifyContent';
const tabBarItemCompactVerticalSpacerSize = { width: 1, height: 4 };
const tabBarItemCompactHorizontalSpacerSize = { width: 0, height: 2 };
const tabBarItemLargeVerticalSpacerSize = { width: 1, height: 4 };
const tabBarItemLargeHorizontalSpacerSize = { width: 4, height: 1 };
export const SimpleTabBarItem = memo((_a) => {
    var { active = false, title, children, tabIdentifier, onTabPress } = _a, others = __rest(_a, ["active", "title", "children", "tabIdentifier", "onTabPress"]);
    const color = useSimpleTabBarItemColor(active);
    const [widthSizeType] = useWidthSizeGroup();
    const tabBarPosition = useTabBarPosition();
    const { tabBar } = useTheme();
    const textWidth = tabBarPosition !== 'bottom' ? tabBar.iOSHorizontalWidth - spacings.m : undefined;
    const renderItem = useCallback((size) => {
        return children(color, size);
    }, [color, children]);
    const spacerSize = getValueForLargeSizeType(widthSizeType, tabBarPosition !== 'bottom' ? tabBarItemLargeVerticalSpacerSize : tabBarItemLargeHorizontalSpacerSize, tabBarPosition !== 'bottom' ? tabBarItemCompactVerticalSpacerSize : tabBarItemCompactHorizontalSpacerSize);
    return (React.createElement(SimpleTabBarItemContainer, Object.assign({ tabIdentifier: tabIdentifier, onTabPress: onTabPress, icon: renderItem }, others),
        React.createElement(Layer, Object.assign({}, spacerSize)),
        React.createElement(Text, Object.assign({}, tabBar.tabBarItemText, { numberOfLines: 1, overflow: 'hidden', width: textWidth, display: 'block', variant: 'label', textOverflow: 'ellipsis', textAlign: 'center', justifyContent: justifyContent, color: color, wordWrap: 'normal' }), title)));
});
SimpleTabBarItem.displayName = 'SimpleTabBarItem';
//# sourceMappingURL=index.js.map