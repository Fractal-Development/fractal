import React from 'react';
import { useTheme, Box, Text, Message, LoadIcon } from '@fractal/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

const messageIcon = (color: string) => <LoadIcon fill={color} />;

export function MessageFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Message Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Message
                    title='Some message'
                    messageType='alternative'
                    description='You can use it to show any message'
                    icon={messageIcon}
                />
            </Box>
        </>
    );
}
