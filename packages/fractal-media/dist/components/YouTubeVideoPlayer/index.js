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
import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '@bma98/fractal-ui';
import { MediaPlayerPoster } from '../MediaPlayerPoster';
import { getVideoID } from './utils/getVideoID';
import { IframePlayer } from './IframePlayer';
import { Loader } from './Loader';
export function YouTubeVideoPlayer(_a) {
    var { source, width, height } = _a, layerProps = __rest(_a, ["source", "width", "height"]);
    const [enabledIFrame, setEnabledIFrame] = useState(false);
    const [isLoadingIFrame, setIsLoadingIFrame] = useState(true);
    const videoID = getVideoID(source);
    const handlePlay = useCallback(() => {
        setEnabledIFrame(true);
    }, []);
    const handleReady = useCallback(() => {
        setIsLoadingIFrame(false);
    }, []);
    return (React.createElement(Layer, Object.assign({ overflow: 'hidden', position: 'relative', backgroundColor: 'black', width: width, height: height }, layerProps),
        React.createElement(AnimatePresence, null, enabledIFrame ? (React.createElement(IframePlayer, { videoID: videoID !== null && videoID !== void 0 ? videoID : '', width: width, height: height, onReady: handleReady })) : (React.createElement(MediaPlayerPoster, { width: width, height: height, source: `http://img.youtube.com/vi/${videoID}/0.jpg`, onPlayPress: handlePlay, from: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 0 } }))),
        enabledIFrame && isLoadingIFrame && React.createElement(Loader, null)));
}
//# sourceMappingURL=index.js.map