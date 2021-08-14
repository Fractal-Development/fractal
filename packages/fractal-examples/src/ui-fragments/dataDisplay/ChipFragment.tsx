import React from 'react';
import { useTheme, Chip, Layer, FileIcon } from '@bma98/fractal-ui';

const onPress = () => console.log('Cross button pressed');

export function ChipFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Layer flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
            <Chip text={'Ver reportes'} marginRight={spacings.s} onCrossButtonPress={onPress} />
            <Chip onCrossButtonPress={onPress}>
                <FileIcon height={24} width={24} fill={colors.text} />
            </Chip>
        </Layer>
    );
}
