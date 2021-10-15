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
import { Text } from '@bma98/fractal-ui';
export function EllipsizeText(_a) {
    var { variant } = _a, others = __rest(_a, ["variant"]);
    return React.createElement(Text, Object.assign({ variant: variant }, others, { numberOfLines: 1, ellipsizeMode: 'tail' }));
}
//# sourceMappingURL=index.native.js.map