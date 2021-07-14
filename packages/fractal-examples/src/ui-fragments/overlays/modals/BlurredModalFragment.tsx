import React, { useState } from 'react';
import { useTheme, Box, Button, Text, BlurrediOSModal } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function BlurredModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [blurredModalVisible, setBlurredModalVisible] = useState(false);

    const toggleBlurredModal = () => setBlurredModalVisible((currentValue) => !currentValue);

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Blurred Modal Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Button variant='main' text='Show Blurred Modal' onPress={toggleBlurredModal} />
                <BlurrediOSModal visible={blurredModalVisible} dismissText={'Done'} onDismiss={toggleBlurredModal}>
                    <Box margin={spacings.m}>
                        <Button variant='warning' text='Dismiss Modal' onPress={toggleBlurredModal} />
                    </Box>
                </BlurrediOSModal>
            </Box>
        </>
    );
}
