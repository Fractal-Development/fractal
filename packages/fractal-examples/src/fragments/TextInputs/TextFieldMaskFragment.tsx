import React from 'react';
import { useTheme, Box, TextFieldMask, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function TextFieldMaskFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>Text Field Mask Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <TextFieldMask
                    type={'money'}
                    placeholder={'Monto'}
                    marginBottom={spacings.s}
                    onChangeText={(maskedText, rawText) => console.log({ maskedText, rawText })}
                />
                <TextFieldMask
                    type={'phone'}
                    placeholder={'Numero telefono'}
                    onChangeText={(maskedText, rawText) => console.log({ maskedText, rawText })}
                />
            </Box>
        </>
    );
}
