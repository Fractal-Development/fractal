import React from 'react';
import { LayerProps } from '@bma98/fractal-ui';
import { MATCH_URL_YOUTUBE } from '../patterns';
import { YouTubeVideoPlayer } from './YouTubeVideoPlayer';
import { Video } from './Video';

export interface OmniPlayerProps extends Omit<LayerProps, 'children' | 'width' | 'height'> {
    source: number | string;
    width: number;
    height: number;
}

export function OmniPlayer({ source, width, height, ...layerProps }: OmniPlayerProps): JSX.Element {
    const isYouTubeVideo = typeof source === 'string' && MATCH_URL_YOUTUBE.test(source);

    if (isYouTubeVideo) {
        return <YouTubeVideoPlayer source={source as string} width={width} height={height} {...layerProps} />;
    }

    return <Video source={source} resizeMode="contain" useNativeControls style={{ width, height, ...layerProps }} />;
}
