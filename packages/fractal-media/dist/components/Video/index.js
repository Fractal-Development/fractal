import React, { forwardRef, createElement, useRef, useEffect } from 'react';
import { mergeRefs } from './utils/mergeRefs';
const HTMLVideo = forwardRef((props, ref) => createElement('video', Object.assign(Object.assign({}, props), { ref })));
HTMLVideo.displayName = 'HTMLVideo';
const Video = forwardRef(({ source, useNativeControls, resizeMode, shouldPlay, rate, volume, isMuted, isLooping, style }, ref) => {
    const internalVideoRef = useRef();
    const objectFit = resizeMode === undefined ? 'none' : resizeMode === 'stretch' ? 'fill' : resizeMode;
    const customStyle = {
        position: undefined,
        objectFit,
        overflow: 'hidden'
    };
    useEffect(() => {
        if (internalVideoRef.current && rate && volume) {
            internalVideoRef.current.playbackRate = rate;
            internalVideoRef.current.volume = volume;
        }
    }, [rate, volume]);
    return (React.createElement(HTMLVideo, { ref: mergeRefs([internalVideoRef, ref]), src: source, muted: isMuted, loop: isLooping, autoPlay: shouldPlay, controls: useNativeControls, style: Object.assign(Object.assign({}, style), customStyle) }));
});
Video.displayName = 'Video';
export { Video };
//# sourceMappingURL=index.js.map