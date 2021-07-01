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
import styled from 'styled-components';
import { Layer, TouchableOpacity, useTheme } from '@bma98/fractal-ui';
const BubbleTriangleLeft = styled(Layer) `
    position: absolute;
    left: 0;
    border-color: transparent;
    border-top-color: ${(props) => props.color};
    border-top-width: 12px;
    border-left-width: 8px;
    border-left-color: transparent;
    background-color: transparent;
    border-style: solid;
`;
const BubbleTriangleRight = styled(Layer) `
    position: absolute;
    right: 0;
    border-color: transparent;
    border-top-color: ${(props) => props.color};
    border-top-width: 12px;
    border-right-width: 8px;
    border-right-color: transparent;
    background-color: transparent;
    border-style: solid;
`;
const Bubble = forwardRef((_a, ref) => {
    var { children, arrowPosition, color, onPress, onLongPress } = _a, others = __rest(_a, ["children", "arrowPosition", "color", "onPress", "onLongPress"]);
    const { shadows, spacings, borderRadius } = useTheme();
    return (React.createElement(Layer, Object.assign({ ref: ref, maxWidth: '75%', alignSelf: arrowPosition === 'left' ? 'flex-start' : 'flex-end' }, others),
        React.createElement(TouchableOpacity, { position: 'relative', paddingLeft: arrowPosition === 'left' ? 6 : 0, paddingRight: arrowPosition === 'right' ? 6 : 0, flexDirection: 'row', onLongPress: onLongPress, onPress: onPress },
            React.createElement(Layer, { padding: spacings.m, backgroundColor: color, borderRadius: borderRadius.m, borderTopLeftRadius: arrowPosition === 'left' ? 0 : borderRadius.m, borderTopRightRadius: arrowPosition === 'right' ? 0 : borderRadius.m, boxShadow: shadows.mainShadow, width: '100%' }, children),
            arrowPosition == 'left' ? React.createElement(BubbleTriangleLeft, { color: color }) : React.createElement(BubbleTriangleRight, { color: color }))));
});
Bubble.displayName = 'Bubble';
export { Bubble };
//# sourceMappingURL=Bubble.js.map