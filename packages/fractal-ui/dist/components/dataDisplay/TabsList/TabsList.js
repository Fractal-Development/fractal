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
import { Layer, ScrollView } from '../../containers';
import { useTheme } from '../../../context';
import { Text } from '../../text';
import { TouchableOpacity } from '../../buttons';
export function ColorTab({ backgroundColor, text, active, textColor, onPress, index }) {
    const { sizes } = useTheme();
    const handlePress = useCallback(() => {
        onPress(index);
    }, [index, onPress]);
    return (React.createElement(TouchableOpacity, { onPress: handlePress, backgroundColor: backgroundColor, height: sizes.tabListItemHeight, width: sizes.tabListItemWidth, animate: { scale: active ? 1 : 0.8 } },
        React.createElement(Text, { variant: 'button', color: textColor }, text)));
}
export function ColorTabList(_a) {
    var { children, tabs, onPress } = _a, others = __rest(_a, ["children", "tabs", "onPress"]);
    const { sizes } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    const handlePress = useCallback((index) => {
        setActiveIndex(index);
        onPress(index);
    }, [onPress]);
    return (React.createElement(Layer, Object.assign({}, others),
        React.createElement(ScrollView, { height: sizes.tabListItemHeight, horizontal: true }, tabs === null || tabs === void 0 ? void 0 : tabs.map((props, index) => (React.createElement(ColorTab, Object.assign({}, props, { onPress: handlePress, index: index, active: index === activeIndex }))))),
        children));
}
//# sourceMappingURL=TabsList.js.map