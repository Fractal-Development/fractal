import React, { useState } from 'react';
import { useTheme, Box, CheckBox, Text } from '@bma98/fractal-ui';

export function CheckBoxFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <Text variant={'title'}>Check Box Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <CheckBox value={isChecked} onValueChange={(value) => setIsChecked(value)} label={'Selectable'} />
            </Box>
        </>
    );
}
