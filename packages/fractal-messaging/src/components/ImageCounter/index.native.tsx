import React from 'react';
import { Layer, Text, useTheme } from '@fractal/fractal-ui';

type Props = {
    imageIndex: number;
    imagesCount: number;
};

export function ImageCounter({ imageIndex, imagesCount }: Props): JSX.Element {
    const { colors } = useTheme();
    return (
        <Layer height={64} backgroundColor='#00000077' alignItems='center' justifyContent='center'>
            <Text fontSize={17} color={colors.white}>{`${imageIndex + 1} / ${imagesCount}`}</Text>
        </Layer>
    );
}
