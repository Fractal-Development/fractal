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
import { Platform } from 'react-native';
import Slider from '@react-native-community/slider';
import { useTheme } from '../../../context/hooks/useTheme';
export function BaseSlider(_a) {
    var { step = 0.001, defaultValue, value } = _a, others = __rest(_a, ["step", "defaultValue", "value"]);
    const { colors } = useTheme();
    return (React.createElement(Slider, Object.assign({ minimumTrackTintColor: colors.mainInteractiveColor, maximumTrackTintColor: Platform.OS == 'android' ? colors.label : colors.placeholder, thumbTintColor: Platform.OS == 'android' ? colors.mainInteractiveColor : colors.white, step: step, style: { height: 20 }, value: value || defaultValue }, others)));
}
//# sourceMappingURL=index.native.js.map