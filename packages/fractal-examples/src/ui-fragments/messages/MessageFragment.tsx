import React from 'react';
import { useTheme, Box, Text, Message, LoadIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function MessageFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Message Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Message
                    title={'Some message'}
                    messageType={'alternative'}
                    description={'You can use it to show any message'}
                    icon={() => <LoadIcon />}
                />
            </Box>
        </>
    );
}
