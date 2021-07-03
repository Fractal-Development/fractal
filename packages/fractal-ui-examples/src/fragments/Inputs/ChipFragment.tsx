import React from 'react';
import { useTheme, Chip, Layer, Text, FileIcon } from '@bma98/fractal-ui';

export function ChipFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Chip Example</Text>
            <Layer flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <Chip text={'Ver reportes'} marginRight={spacings.s} onCrossButtonPress={() => console.log('Cross button pressed')} />
                <Chip marginRight={spacings.s} onCrossButtonPress={() => console.log('Cross button pressed')}>
                    <FileIcon height={24} width={24} fill={colors.text} />
                </Chip>
            </Layer>
        </>
    );
}
