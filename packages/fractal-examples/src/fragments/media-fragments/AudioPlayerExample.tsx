import React from 'react';
import { Text, useTheme } from '@bma98/fractal-ui';
import { AudioPlayer } from '@bma98/fractal-media';

export function AudioPlayerExample(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' marginBottom={spacings.m}>
                Audio Player Example
            </Text>
            <AudioPlayer
                tracks={[
                    {
                        title: 'Rubber Robot',
                        image: 'https://picsum.photos/id/382/300',
                        audioSrc: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3'
                    },
                    {
                        title: 'All Of Me',
                        image: 'https://picsum.photos/id/398/300',
                        audioSrc:
                            'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3'
                    },
                    {
                        title: 'Sorry',
                        image: 'https://picsum.photos/id/392/300',
                        audioSrc: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3'
                    },
                    {
                        title: 'Longing',
                        image: 'https://react-native-track-player.js.org/example/Longing.jpeg',
                        audioSrc: 'https://react-native-track-player.js.org/example/Longing.mp3'
                    },
                    {
                        title: 'Soul Searching (Demo)',
                        image: 'https://react-native-track-player.js.org/example/Soul%20Searching.jpeg',
                        audioSrc: 'https://react-native-track-player.js.org/example/Soul%20Searching.mp3'
                    },
                    {
                        title: 'Lullaby (Demo)',
                        image: 'https://react-native-track-player.js.org/example/Lullaby%20(Demo).jpeg',
                        audioSrc: 'https://react-native-track-player.js.org/example/Lullaby%20(Demo).mp3'
                    },
                    {
                        title: 'Rhythm City (Demo)',
                        image: 'https://react-native-track-player.js.org/example/Rhythm%20City%20(Demo).jpeg',
                        audioSrc: 'https://react-native-track-player.js.org/example/Rhythm%20City%20(Demo).mp3'
                    },
                    {
                        title: 'Whip',
                        image: 'https://react-native-track-player.js.org/example/hls/whip/whip.jpeg',
                        audioSrc: 'https://react-native-track-player.js.org/example/hls/whip/playlist.m3u8'
                    },
                    {
                        title: 'Smooth Jazz 24/7',
                        image: 'https://react-native-track-player.js.org/example/smooth-jazz-24-7.jpeg',
                        audioSrc: 'https://ais-sa5.cdnstream1.com/b75154_128mp3'
                    }
                ]}
                marginBottom={spacings.m}
            />
        </>
    );
}
