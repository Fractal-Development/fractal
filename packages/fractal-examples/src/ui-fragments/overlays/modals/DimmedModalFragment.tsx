import React, { useState } from 'react';
import { useTheme, Box, Button, Text, DimmedModal } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function DimmedModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [dimmedModalVisible, setDimmedModalVisible] = useState(false);

    const toggleDimmedModal = () => setDimmedModalVisible((currentValue) => !currentValue);

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Dimmed Modal Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Button variant='main' text='Show Dimmed Modal' onPress={toggleDimmedModal} />
                <DimmedModal visible={dimmedModalVisible} onDismiss={toggleDimmedModal}>
                    <Box>
                        <Button variant='warning' text='Dismiss Dimmed Modal' onPress={toggleDimmedModal} />
                    </Box>
                </DimmedModal>
            </Box>
        </>
    );
}
