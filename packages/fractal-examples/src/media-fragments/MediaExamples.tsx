import React from 'react';
import { AudioMessagePlayerExample } from './AudioMessagePlayerExample';
import { AudioPlayerExample } from './AudioPlayerExample';
import { MediaContentRowExample } from './MediaContentRowExample';
import { MediaPlayerButtonExample } from './MediaPlayerButtonExample';
import { VideoPlayerExample } from './VideoPlayerExample';
import { YouTubeVideoPlayerExample } from './YouTubeVideoPlayerExample';

export function MediaExamples(): JSX.Element {
    return (
        <>
            <AudioPlayerExample />
            <AudioMessagePlayerExample />
            <VideoPlayerExample />
            <YouTubeVideoPlayerExample />
            <MediaContentRowExample />
            <MediaPlayerButtonExample />
        </>
    );
}
