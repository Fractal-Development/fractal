import React from 'react';
import { LayerProps } from '@fractal-software/fractal-ui';
import { MATCH_URL_YOUTUBE } from '../patterns';
import { Video } from './Video';
import { ResizeMode } from '../types';
import { IframePlayer } from './YouTubeVideoPlayer/IframePlayer';
import { getVideoID } from './YouTubeVideoPlayer/utils/getVideoID';

export interface AutoPlayerProps extends Omit<LayerProps, 'children' | 'width' | 'height'> {
    source: number | string;
    width: number;
    height: number;
}

export function AutoPlayer({ source, width, height, ...layerProps }: AutoPlayerProps): JSX.Element {
    const isYouTubeVideo = typeof source === 'string' && MATCH_URL_YOUTUBE.test(source);

    if (isYouTubeVideo) {
        const videoID = getVideoID(source);
        return <IframePlayer videoID={videoID ?? ''} width={width} height={height} />;
    }

    return <Video source={source} resizeMode={ResizeMode.CONTAIN} shouldPlay useNativeControls style={{ width, height, ...layerProps }} />;
}
