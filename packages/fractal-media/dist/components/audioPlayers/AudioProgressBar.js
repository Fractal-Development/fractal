var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import React, { useState, useEffect } from 'react';
import { Layer, Text, Slider, useTheme } from '@bma98/fractal-ui';
import { formatNumberToTime } from './utils/formatNumberToTime';
export function AudioProgressBar(_a) {
    var { duration, currentTime, isPlaying, onTimeUpdate, timeLabelsSpacing } = _a, layerProps = __rest(_a, ["duration", "currentTime", "isPlaying", "onTimeUpdate", "timeLabelsSpacing"]);
    const { spacings } = useTheme();
    const [trackProgress, setTrackProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const handleSlidingStart = () => setIsDragging(true);
    const handleValueChange = (positionMillis) => setTrackProgress(positionMillis);
    const handleSlidingComplete = (time) => __awaiter(this, void 0, void 0, function* () {
        yield onTimeUpdate(time);
        setIsDragging(false);
    });
    useEffect(() => {
        if (isPlaying && !isDragging) {
            setTrackProgress(currentTime);
        }
    }, [currentTime, isDragging, isPlaying, trackProgress]);
    return (React.createElement(Layer, Object.assign({}, layerProps),
        React.createElement(Slider, { value: trackProgress, minimumValue: 0, step: 1, maximumValue: duration, onSlidingStart: handleSlidingStart, onValueChange: handleValueChange, onSlidingComplete: handleSlidingComplete }),
        React.createElement(Layer, { flexDirection: "row", justifyContent: "space-between", marginTop: timeLabelsSpacing !== null && timeLabelsSpacing !== void 0 ? timeLabelsSpacing : spacings.s },
            React.createElement(Text, { variant: 'smallLabel', fontSize: 12 }, `${formatNumberToTime(trackProgress)}`),
            React.createElement(Text, { variant: 'smallLabel', fontSize: 12 }, `${formatNumberToTime(duration)}`))));
}
//# sourceMappingURL=AudioProgressBar.js.map