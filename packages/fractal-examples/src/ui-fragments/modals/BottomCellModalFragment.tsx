import React, { useState } from 'react';
import { useTheme, Box, Button, Text, BottomCellModal } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function BottomCellModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [bottomCellVisible, setBottomCellVisible] = useState(false);

    const toggleBottomCell = () => setBottomCellVisible((currentValue) => !currentValue);

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Bottom Cell Modal Example
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Button variant='main' text='Show Bottom Cell Modal' onPress={toggleBottomCell} />
                <BottomCellModal visible={bottomCellVisible} onDismiss={toggleBottomCell}>
                    <Box>
                        <Button variant='warning' text='Dismiss Cell Modal' onPress={toggleBottomCell} />
                    </Box>
                </BottomCellModal>
            </Box>
        </>
    );
}
