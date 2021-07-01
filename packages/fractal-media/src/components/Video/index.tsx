import React, { forwardRef, createElement, useRef, useEffect } from 'react';
import { VideoProps } from './types';
import { mergeRefs } from './utils/mergeRefs';

const HTMLVideo: any = forwardRef((props, ref) => createElement('video', { ...props, ref }));

HTMLVideo.displayName = 'HTMLVideo';

const Video = forwardRef(
    ({ source, useNativeControls, resizeMode, shouldPlay, rate, volume, isMuted, isLooping, style }: VideoProps, ref: any): JSX.Element => {
        const internalVideoRef = useRef<HTMLVideoElement>();
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

        return (
            <HTMLVideo
                ref={mergeRefs([internalVideoRef, ref])}
                src={source}
                muted={isMuted}
                loop={isLooping}
                autoPlay={shouldPlay}
                controls={useNativeControls}
                style={{ ...style, ...customStyle }}
            />
        );
    }
);

Video.displayName = 'Video';

export { Video };
