import React, { useState } from 'react';
import { useTheme, Box, Button, Text, MiddleCellModal } from '../../../src';

export function MiddleCellModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [middleCellVisible, setMiddleCellVisible] = useState(false);

    const toggleMiddleCell = () => setMiddleCellVisible((currentValue) => !currentValue);

    return (
        <>
            <Text variant={'title'}>Middle Cell Modal Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Button variant='main' text='Show Middle Cell Modal' onPress={toggleMiddleCell} />
                <MiddleCellModal visible={middleCellVisible} onDismiss={toggleMiddleCell}>
                    <Box>
                        <Button variant='warning' text='Dismiss Cell Modal' onPress={toggleMiddleCell} />
                    </Box>
                </MiddleCellModal>
            </Box>
        </>
    );
}
