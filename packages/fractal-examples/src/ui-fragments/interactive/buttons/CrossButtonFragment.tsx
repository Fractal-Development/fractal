import React from 'react';
import { useTheme, Box, CrossButton, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function CrossButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Cross Button Fragment
            </Text>
            <Box alignContent={'center'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <CrossButton onPress={() => console.log('Cross button pressed')} />
            </Box>
        </>
    );
}
