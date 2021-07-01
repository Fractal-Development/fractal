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
import styled from 'styled-components/native';
import { Layer } from '../containers';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';
const StyledRNActivityIndicator = styled(RNActivityIndicator) `
    width: 100%;
    height: 100%;
`;
const ActivityIndicator = forwardRef((_a, ref) => {
    var { color } = _a, others = __rest(_a, ["color"]);
    return (React.createElement(Layer, Object.assign({ ref: ref }, others),
        React.createElement(StyledRNActivityIndicator, { color: color, size: 'large' })));
});
ActivityIndicator.displayName = 'ActivityIndicator';
export { ActivityIndicator };
//# sourceMappingURL=index.native.js.map