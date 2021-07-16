import React, { Fragment } from 'react';
import { AudioMessagePlayerExample } from './AudioMessagePlayerExample';
import { AudioPlayerExample } from './AudioPlayerExample';
import { MediaContentRowExample } from './MediaContentRowExample';
import { MediaPlayerButtonExample } from './MediaPlayerButtonExample';
import { VideoPlayerExample } from './VideoPlayerExample';
import { YouTubeVideoPlayerExample } from './YouTubeVideoPlayerExample';
export function MediaExamples() {
    return (React.createElement(Fragment, null,
        React.createElement(AudioPlayerExample, null),
        React.createElement(AudioMessagePlayerExample, null),
        React.createElement(VideoPlayerExample, null),
        React.createElement(YouTubeVideoPlayerExample, null),
        React.createElement(MediaContentRowExample, null),
        React.createElement(MediaPlayerButtonExample, null)));
}
//# sourceMappingURL=MediaExamples.js.map