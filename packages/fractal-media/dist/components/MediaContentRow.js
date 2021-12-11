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
import React from 'react';
import { Layer, useTheme, HorizontalLayer, Avatar, OptionsButton, Separator, TouchableOpacity } from '@bma98/fractal-ui';
import { LoveToggleButton } from './LoveToggleButton';
import { EllipsizeText } from './EllipsizeText';
export function MediaContentRow(_a) {
    var { imageSource, title, subtitle, addSeparator, enableLoveButton, onHeartPress, isLoved, checkedLoveColor, showOptionsButton, onOptionsPress, onPress } = _a, layerProps = __rest(_a, ["imageSource", "title", "subtitle", "addSeparator", "enableLoveButton", "onHeartPress", "isLoved", "checkedLoveColor", "showOptionsButton", "onOptionsPress", "onPress"]);
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Layer, Object.assign({}, layerProps),
            React.createElement(HorizontalLayer, { alignItems: "center", minHeight: 48 },
                React.createElement(TouchableOpacity, { onPress: onPress, flex: 1, flexDirection: "row" },
                    React.createElement(Avatar, { source: imageSource, size: 48 }),
                    React.createElement(Layer, { minWidth: 0, marginLeft: spacings.s, height: 48, flex: 1, justifyContent: subtitle ? 'space-between' : 'center' },
                        React.createElement(EllipsizeText, { variant: "normal" }, title),
                        subtitle && React.createElement(EllipsizeText, { variant: "smallLabel" }, subtitle))),
                React.createElement(Layer, null, enableLoveButton ? (React.createElement(LoveToggleButton, { onPress: onHeartPress, checked: isLoved, checkedColor: checkedLoveColor })) : showOptionsButton ? (React.createElement(OptionsButton, { onPress: onOptionsPress })) : null))),
        addSeparator ? React.createElement(Separator, null) : null));
}
//# sourceMappingURL=MediaContentRow.js.map