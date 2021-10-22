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
import React, { useCallback, useState } from 'react';
import { Box, Layer, ScrollView } from '../../layout';
import { useTheme } from '../../../context';
import { ColorTab } from './ColorTab';
export function ColorTabList(_a) {
    var { children, tabs, defaultActiveIndex = 0, onItemPress } = _a, others = __rest(_a, ["children", "tabs", "defaultActiveIndex", "onItemPress"]);
    const { borderRadius } = useTheme();
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
    const { tabColor } = tabs[activeIndex];
    const handlePress = useCallback((index) => {
        setActiveIndex(index);
        onItemPress === null || onItemPress === void 0 ? void 0 : onItemPress(index);
    }, [onItemPress]);
    return (React.createElement(Layer, Object.assign({}, others),
        React.createElement(ScrollView, { showsHorizontalScrollIndicator: false, horizontal: true }, tabs.map((props, index) => (React.createElement(ColorTab, Object.assign({ key: index }, props, { onPress: handlePress, index: index, active: index === activeIndex }))))),
        React.createElement(Box, { borderTopLeftRadius: activeIndex !== 0 ? borderRadius.m : 0, borderTopRightRadius: borderRadius.m, width: '100%', flex: 1, animate: { backgroundColor: tabColor }, transition: { type: 'timing' } }, children(activeIndex))));
}
//# sourceMappingURL=ColorTabList.js.map