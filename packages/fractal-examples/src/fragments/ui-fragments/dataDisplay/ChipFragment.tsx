import React from 'react';
import { useTheme, Chip, Layer } from '@bma98/fractal-ui';

const onPress = () => console.log('Cross button pressed');

export function ChipFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Layer flexDirection='row' marginTop={spacings.s} marginBottom={spacings.xl}>
            <Chip text='Ver reportes' onCrossButtonPress={onPress} />
        </Layer>
    );
}
