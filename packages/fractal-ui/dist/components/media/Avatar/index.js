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
import { Image } from '../Image';
const Avatar = forwardRef((_a, ref) => {
    var { size = 64 } = _a, others = __rest(_a, ["size"]);
    return React.createElement(Image, Object.assign({ ref: ref, width: size, height: size, borderRadius: size / 2 }, others));
});
Avatar.displayName = 'Avatar';
export { Avatar };
//# sourceMappingURL=index.js.map