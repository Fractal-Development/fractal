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
import React, { useCallback } from 'react';
import { HorizontalLayer, Layer, useTheme } from '@bma98/fractal-ui';
import { useMinimalAudioPlayer } from './useMinimalAudioPlayer';
import { PlayPauseButton } from './PlayPauseButton';
import { AudioProgressBar } from './AudioProgressBar';
import { RateToggleButton } from './RateToggleButton';
export function AudioMessagePlayer(_a) {
    var { audioSrc } = _a, layerProps = __rest(_a, ["audioSrc"]);
    const { spacings } = useTheme();
    const { currentTime, duration, isPlaying, handlePlayPause, setPositionManually, setRateManually } = useMinimalAudioPlayer(audioSrc);
    const handleUpdateTime = useCallback((positionMillis) => __awaiter(this, void 0, void 0, function* () {
        yield setPositionManually(positionMillis);
    }), [setPositionManually]);
    const handleUpdateRate = useCallback((rate) => __awaiter(this, void 0, void 0, function* () {
        yield setRateManually(rate);
    }), [setRateManually]);
    return (React.createElement(Layer, Object.assign({}, layerProps),
        React.createElement(HorizontalLayer, { alignItems: 'center' },
            React.createElement(PlayPauseButton, { isPlaying: isPlaying, onPress: handlePlayPause }),
            React.createElement(AudioProgressBar, { duration: duration, currentTime: currentTime, isPlaying: isPlaying, onTimeUpdate: handleUpdateTime, timeLabelsSpacing: spacings.xs, flex: 1, marginLeft: spacings.s, marginRight: spacings.s }),
            React.createElement(RateToggleButton, { onChangeRate: handleUpdateRate }))));
}
//# sourceMappingURL=AudioMessagePlayer.js.map