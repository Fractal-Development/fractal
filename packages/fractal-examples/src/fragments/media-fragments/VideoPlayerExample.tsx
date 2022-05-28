import React from 'react';
import { Box, Text, useTheme } from '@bma98/fractal-ui';
import { ResizeMode, Video } from '@bma98/fractal-media';

export function VideoPlayerExample(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' marginBottom={spacings.m}>
                Video Player Example
            </Text>
            <Box marginBottom={spacings.m}>
                <Video
                    source='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    style={{ width: 304, height: 171 }}
                />
            </Box>
        </>
    );
}
