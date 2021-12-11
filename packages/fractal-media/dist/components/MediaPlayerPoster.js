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
import { ImageBackground } from '@bma98/fractal-ui';
import { MediaPlayerButton } from './MediaPlayerButton';
export function MediaPlayerPoster(_a) {
    var { onPlayPress, playerButtonSize } = _a, others = __rest(_a, ["onPlayPress", "playerButtonSize"]);
    return (React.createElement(ImageBackground, Object.assign({ alignItems: "center", justifyContent: "center" }, others),
        React.createElement(MediaPlayerButton, { onPress: onPlayPress, size: playerButtonSize })));
}
//# sourceMappingURL=MediaPlayerPoster.js.map