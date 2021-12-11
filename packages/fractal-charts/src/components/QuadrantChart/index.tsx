import React from 'react';
import { useTheme, HorizontalLayer, Layer } from '@bma98/fractal-ui';
import { HorizontalDashed } from './HorizontalDashed';
import { VerticalDashed } from './VerticalDashed';
import { VerticalTextLayer } from './VerticalTextLayer';
import { CenteredText } from './CenteredText';
import { Quadrant } from './Quadrant';
import { QuadrantChartProps } from '../../types';

export function QuadrantChart({
    data,
    showIconInQuadrant,
    colors,
    positiveYAxisLabel,
    negativeYAxisLabel,
    positiveXAxisLabel,
    negativeXAxisLabel,
    firstQuadrantLabel,
    secondQuadrantLabel,
    thirdQuadrantLabel,
    fourthQuadrantLabel,
    renderQuadrantIcon,
    ...layerProps
}: QuadrantChartProps): JSX.Element {
    const { borderRadius } = useTheme();
    return (
        <Layer {...layerProps}>
            <Layer flex={1}>
                <HorizontalLayer flex={1}>
                    <VerticalTextLayer text={positiveYAxisLabel} textColor={colors.text} />
                    <Quadrant
                        variant='first'
                        frequency={data[0]}
                        showIcon={showIconInQuadrant === 'first'}
                        label={firstQuadrantLabel}
                        colors={colors}
                        renderQuadrantIcon={renderQuadrantIcon}
                        borderTopLeftRadius={borderRadius.m}
                    />
                    <VerticalDashed />
                    <Quadrant
                        variant='second'
                        frequency={data[1]}
                        showIcon={showIconInQuadrant === 'second'}
                        label={secondQuadrantLabel}
                        colors={colors}
                        renderQuadrantIcon={renderQuadrantIcon}
                        borderTopRightRadius={borderRadius.m}
                    />
                </HorizontalLayer>
                <HorizontalDashed />
                <HorizontalLayer flex={1}>
                    <VerticalTextLayer text={negativeYAxisLabel} textColor={colors.text} />
                    <Quadrant
                        variant='third'
                        frequency={data[2]}
                        showIcon={showIconInQuadrant === 'third'}
                        label={thirdQuadrantLabel}
                        colors={colors}
                        renderQuadrantIcon={renderQuadrantIcon}
                        borderBottomLeftRadius={borderRadius.m}
                    />
                    <VerticalDashed />
                    <Quadrant
                        variant='fourth'
                        frequency={data[3]}
                        showIcon={showIconInQuadrant === 'fourth'}
                        label={fourthQuadrantLabel}
                        colors={colors}
                        renderQuadrantIcon={renderQuadrantIcon}
                        borderBottomRightRadius={borderRadius.m}
                    />
                </HorizontalLayer>
            </Layer>
            <HorizontalLayer paddingLeft={24}>
                <Layer flex={1} alignItems='center'>
                    <CenteredText width={100} marginTop={4} color={colors.text}>
                        {negativeXAxisLabel}
                    </CenteredText>
                </Layer>
                <VerticalDashed />
                <Layer flex={1} alignItems='center'>
                    <CenteredText width={100} marginTop={4} color={colors.text}>
                        {positiveXAxisLabel}
                    </CenteredText>
                </Layer>
            </HorizontalLayer>
        </Layer>
    );
}
