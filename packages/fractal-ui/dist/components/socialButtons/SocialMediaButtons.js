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
import { AppleButton } from './AppleButton';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';
import { Layer } from '../containers';
import { useTheme } from '../../context/hooks/useTheme';
import { HorizontalLayer } from '../containers/HorizontalLayer';
const SocialMediaButtons = forwardRef((_a, ref) => {
    var { onGooglePress, onFacebookPress, onApplePress, googleLoading, facebookLoading, appleLoading, appleText, removeAppleButton } = _a, others = __rest(_a, ["onGooglePress", "onFacebookPress", "onApplePress", "googleLoading", "facebookLoading", "appleLoading", "appleText", "removeAppleButton"]);
    const { spacings } = useTheme();
    return (React.createElement(Layer, Object.assign({ ref: ref }, others),
        React.createElement(HorizontalLayer, { marginBottom: spacings.m },
            React.createElement(GoogleButton, { loading: googleLoading, flex: 1, onPress: onGooglePress }),
            React.createElement(Layer, { width: 16 }),
            React.createElement(FacebookButton, { loading: facebookLoading, flex: 1, onPress: onFacebookPress })),
        removeAppleButton ? null : React.createElement(AppleButton, { loading: appleLoading, onPress: onApplePress, text: appleText })));
});
SocialMediaButtons.displayName = 'SocialMediaButtons';
export { SocialMediaButtons };
//# sourceMappingURL=SocialMediaButtons.js.map