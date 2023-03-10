import React, { forwardRef, createElement, useRef, useEffect, VideoHTMLAttributes } from 'react';
import { VideoProps } from './types';
import { mergeRefs } from './utils/mergeRefs';

const HTMLVideo = forwardRef((props: VideoHTMLAttributes<HTMLVideoElement>, ref) => createElement('video', { ...props, ref }));

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
                src={source as string | undefined}
                muted={isMuted}
                loop={isLooping}
                autoPlay={shouldPlay}
                controls={useNativeControls}
                playsInline
                style={{ ...style, ...customStyle }}
            />
        );
    }
);

Video.displayName = 'Video';

export { Video };
