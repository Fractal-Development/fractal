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
import { Layer } from '@bma98/fractal-ui';
import React from 'react';
export function Screen(_a) {
    var { active, activityState } = _a, others = __rest(_a, ["active", "activityState"]);
    return React.createElement(Layer, Object.assign({ display: activityState > 0 && active > 0 ? 'flex' : 'none' }, others));
}
//# sourceMappingURL=index.js.map