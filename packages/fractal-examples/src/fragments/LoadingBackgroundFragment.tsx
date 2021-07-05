import React from 'react';
import { useTheme, Box, LoadingBackground, Text } from '@bma98/fractal-ui';

export function LoadingBackgroundFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Loading Background</Text>
            <Box alignItems={'center'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <LoadingBackground width={'40%'} height={'40%'} />
            </Box>
        </>
    );
}