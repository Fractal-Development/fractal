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
import { MATCH_URL_YOUTUBE } from '../patterns';
import { YouTubeVideoPlayer } from './YouTubeVideoPlayer';
import { Video } from './Video';
export function OmniPlayer(_a) {
    var { source, width, height } = _a, layerProps = __rest(_a, ["source", "width", "height"]);
    const isYouTubeVideo = typeof source == 'string' && MATCH_URL_YOUTUBE.test(source);
    if (isYouTubeVideo) {
        return React.createElement(YouTubeVideoPlayer, Object.assign({ source: source, width: width, height: height }, layerProps));
    }
    return React.createElement(Video, { source: source, resizeMode: 'contain', useNativeControls: true, style: Object.assign({ width, height }, layerProps) });
}
//# sourceMappingURL=OmniPlayer.js.map