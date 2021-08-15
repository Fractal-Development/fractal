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
import React, { memo } from 'react';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
import { Pressable, useTheme } from '@bma98/fractal-ui';
import { useTabBarPosition } from '../../../../TabBar/hooks/useTabBarPosition';
import { useTabPress } from '../../../hooks/useTabPress';
export const SimpleTabBarItemContainer = memo((_a) => {
    var { children, icon, tabIdentifier, onTabPress } = _a, others = __rest(_a, ["children", "icon", "tabIdentifier", "onTabPress"]);
    const { tabBar, spacings } = useTheme();
    const [widthSizeType] = useWidthSizeGroup();
    const tabBarPosition = useTabBarPosition();
    const flexDirection = tabBarPosition !== 'bottom' ? 'column' : getValueForLargeSizeType(widthSizeType, 'row', 'column');
    const flexGrow = tabBarPosition === 'bottom' ? 1 : undefined;
    const marginBottom = tabBarPosition !== 'bottom' ? spacings.m : undefined;
    const handlePress = useTabPress(tabIdentifier, onTabPress);
    return (React.createElement(Pressable, Object.assign({ flexGrow: flexGrow, flexDirection: flexDirection, marginBottom: marginBottom, justifyContent: 'center', alignItems: 'center', minHeight: tabBar.iOSVerticalHeight - 1, minWidth: tabBar.iOSHorizontalWidth - 1, cursor: 'pointer', onPress: handlePress }, others),
        icon(24),
        children));
});
SimpleTabBarItemContainer.displayName = 'SimpleTabBarItemContainer';
//# sourceMappingURL=SimpleTabBarItemContainer.js.map