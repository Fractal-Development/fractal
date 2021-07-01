import React, { useEffect } from 'react';
import { Layer, HorizontalLayer, useTheme, LayerProps } from '@bma98/fractal-ui';

export interface HorizontalBarProps extends Omit<LayerProps, 'children'> {
    percentage: number;
    colors: {
        background: string;
        bar: string;
    };
    barHeight?: number;
    barBorderRadius?: number;
}

export function HorizontalBar({ percentage, colors, barHeight = 54, barBorderRadius, ...layerProps }: HorizontalBarProps): JSX.Element {
    const { borderRadius } = useTheme();

    useEffect(() => {
        if (percentage > 1 || percentage < 0) {
            throw new Error('Invalid range (percentage should be between 0 and 1');
        }
    }, [percentage]);

    return (
        <Layer {...layerProps}>
            <HorizontalLayer
                backgroundColor={colors.background}
                height={barHeight}
                flexShrink={1}
                overflow={'hidden'}
                borderRadius={barBorderRadius ?? borderRadius.m}
            >
                <HorizontalLayer flex={percentage} backgroundColor={colors.bar} borderRadius={barBorderRadius ?? borderRadius.m} />
            </HorizontalLayer>
        </Layer>
    );
}
