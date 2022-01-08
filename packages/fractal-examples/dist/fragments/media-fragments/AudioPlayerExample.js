import React from 'react';
import { Text, useTheme } from '@bma98/fractal-ui';
import { AudioPlayer } from '@bma98/fractal-media';
export function AudioPlayerExample() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title', marginBottom: spacings.m }, "Audio Player Example"),
        React.createElement(AudioPlayer, { tracks: [
                {
                    title: 'Rubber Robot',
                    image: 'https://picsum.photos/id/382/300',
                    audioSrc: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3'
                },
                {
                    title: 'All Of Me',
                    image: 'https://picsum.photos/id/398/300',
                    audioSrc: 'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3'
                },
                {
                    title: 'Sorry',
                    image: 'https://picsum.photos/id/392/300',
                    audioSrc: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3'
                }
            ], marginBottom: spacings.m })));
}
//# sourceMappingURL=AudioPlayerExample.js.map