import React from 'react';
import { useTheme, Layer, LayerProps, HorizontalLayer } from '@bma98/fractal-ui';
import { CenteredText } from './CenteredText';
import { Dot } from './Dot';
import { chunkArray } from './utils/chunkArray';
import { QuadrantVariant, QuadrantChartColors, QuadrantIcon } from '../../types';

const ICON_SIZE = 60;

interface QuadrantProps extends Omit<LayerProps, 'children'>, QuadrantIcon {
    label: string;
    frequency: number;
    variant: QuadrantVariant;
    colors: QuadrantChartColors;
    showIcon?: boolean;
}

export function Quadrant({ label, frequency, variant, showIcon, colors, renderQuadrantIcon, ...others }: QuadrantProps): JSX.Element {
    const { spacings, colors: themeColors } = useTheme();
    const tintColor = colors[`${variant}Quadrant`];
    const frequencyArray = Array.from(Array(frequency).keys());
    const chunkFrequencyArray = chunkArray(frequencyArray, 8);

    const renderDot = (index: number): JSX.Element => {
        const isLastIndex = index === frequency - 1;
        return <Dot key={`dot-${index}`} color={tintColor} addSpacing={!isLastIndex} />;
    };

    return (
        <Layer flex={1} backgroundColor={themeColors.background} padding={spacings.xs} {...others}>
            <HorizontalLayer flex={1}>
                {chunkFrequencyArray.map((dots, index) => (
                    <Layer key={`${index}`} marginRight={4}>
                        {dots.map(renderDot)}
                    </Layer>
                ))}
                {showIcon && (
                    <Layer flex={1} justifyContent='center' alignItems='center'>
                        {renderQuadrantIcon?.(tintColor, ICON_SIZE, variant)}
                    </Layer>
                )}
            </HorizontalLayer>
            <CenteredText fontSize={12} color={colors.text}>
                {label}
            </CenteredText>
        </Layer>
    );
}
