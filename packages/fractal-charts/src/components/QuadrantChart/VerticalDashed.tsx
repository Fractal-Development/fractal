import React from 'react';
import { useTheme, Layer } from '@bma98/fractal-ui';

export function VerticalDashed(): JSX.Element {
    const { colors } = useTheme();
    return (
        <Layer width={1} overflow="hidden">
            <Layer width={2} flexGrow={1} borderStyle="dashed" borderWidth={1} borderColor={colors.label} />
        </Layer>
    );
}
