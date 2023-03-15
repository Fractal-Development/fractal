import React from 'react';
import { Box, Text, useTheme } from '@fractal/fractal-ui';
import { MediaContentRow } from '@fractal/fractal-media';

export function MediaContentRowExample(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' marginBottom={spacings.m}>
                Media Content Row Example
            </Text>
            <Box marginBottom={spacings.m}>
                <MediaContentRow
                    title='Rubber Robot'
                    subtitle='Podington Bear'
                    imageSource='https://picsum.photos/id/382/300'
                    addSeparator
                    padding={spacings.s}
                />
                <MediaContentRow
                    title='Rubber Robot'
                    subtitle='Podington Bear'
                    imageSource='https://picsum.photos/id/382/300'
                    showOptionsButton
                    addSeparator
                    padding={spacings.s}
                />
                <MediaContentRow
                    title='Rubber Robot'
                    subtitle='Podington Bear'
                    imageSource='https://picsum.photos/id/382/300'
                    enableLoveButton
                    addSeparator
                    padding={spacings.s}
                />
                <MediaContentRow
                    title='Rubber Robot'
                    subtitle='Podington Bear'
                    imageSource='https://picsum.photos/id/382/300'
                    enableLoveButton
                    isLoved
                    padding={spacings.s}
                />
            </Box>
        </>
    );
}
