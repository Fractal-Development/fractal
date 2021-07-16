import React, { Fragment } from 'react';
import { Box, Text, useTheme } from '@bma98/fractal-ui';
import { Video } from '@bma98/fractal-media';

export function VideoPlayerExample(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Video Player Example
            </Text>
            <Box marginBottom={spacings.m}>
                <Video
                    source={'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}
                    useNativeControls
                    resizeMode={'contain'}
                    style={{ width: 304, height: 171 }}
                />
            </Box>
        </Fragment>
    );
}
