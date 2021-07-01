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
import React, { forwardRef } from 'react';
import { Text } from '../text';
import { useTheme } from '../../context/hooks/useTheme';
import { Layer } from '../containers/Layer';
import { HorizontalLayer } from '../containers/HorizontalLayer';
const Message = forwardRef((_a, ref) => {
    var { messageType = 'main', title, icon, description } = _a, others = __rest(_a, ["messageType", "title", "icon", "description"]);
    const { colors, spacings, borderRadius } = useTheme();
    const backgroundColor = `${messageType}InteractiveColor100`;
    const titleVariant = `${messageType}InteractiveColor`;
    const textVariant = `${messageType}InteractiveColor`;
    return (React.createElement(Layer, Object.assign({ ref: ref, padding: spacings.m, borderRadius: borderRadius.m, backgroundColor: colors[backgroundColor] }, others),
        React.createElement(HorizontalLayer, { alignItems: 'center', marginBottom: spacings.xs },
            icon != null ? icon(colors[textVariant]) : null,
            React.createElement(Text, { marginLeft: icon != null ? spacings.s : undefined, variant: 'title', color: colors[titleVariant] }, title)),
        React.createElement(Text, { variant: 'normal', color: colors[textVariant] }, description)));
});
Message.displayName = 'Message';
export { Message };
//# sourceMappingURL=Message.js.map