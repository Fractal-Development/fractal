import React from 'react';
import { useTheme, Layer } from '@fractal-software/fractal-ui';

export function HorizontalDashed(): JSX.Element {
    const { colors } = useTheme();
    return (
        <Layer height={1} overflow='hidden'>
            <Layer height={2} borderStyle='dashed' borderWidth={1} borderColor={colors.label} />
        </Layer>
    );
}
