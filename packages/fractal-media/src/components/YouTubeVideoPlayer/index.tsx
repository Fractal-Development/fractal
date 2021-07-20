import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layer, LayerProps } from '@bma98/fractal-ui';
import { MediaPlayerPoster } from '../MediaPlayerPoster';
import { getVideoID } from './utils/getVideoID';
import { IframePlayer } from './IframePlayer';
import { Loader } from './Loader';

export interface YouTubeVideoPlayerProps extends Omit<LayerProps, 'children' | 'width' | 'height'> {
    source: string;
    width: number;
    height: number;
}

export function YouTubeVideoPlayer({ source, width, height, ...layerProps }: YouTubeVideoPlayerProps): JSX.Element {
    const [enabledIFrame, setEnabledIFrame] = useState(false);
    const [isLoadingIFrame, setIsLoadingIFrame] = useState(true);
    const videoID = getVideoID(source);

    const handlePlay = useCallback((): void => {
        setEnabledIFrame(true);
    }, []);

    const handleReady = useCallback((): void => {
        setIsLoadingIFrame(false);
    }, []);

    return (
        <Layer overflow='hidden' position={'relative'} backgroundColor={'black'} width={width} height={height} {...layerProps}>
            <AnimatePresence>
                {enabledIFrame ? (
                    <IframePlayer videoID={videoID ?? ''} width={width} height={height} onReady={handleReady} />
                ) : (
                    <MediaPlayerPoster
                        width={width}
                        height={height}
                        source={`http://img.youtube.com/vi/${videoID}/0.jpg`}
                        onPlayPress={handlePlay}
                        from={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>
            {enabledIFrame && isLoadingIFrame && <Loader />}
        </Layer>
    );
}
