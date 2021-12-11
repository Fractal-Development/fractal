import React from 'react';
import YoutubeIframePlayer from 'react-native-youtube-iframe';
import { IframePlayerProps } from './types';

export function IframePlayer({ videoID, height, width, onReady }: IframePlayerProps): JSX.Element {
    return (
        <YoutubeIframePlayer forceAndroidAutoplay play videoId={videoID} height={height} width={width} onReady={onReady} />
    );
}
