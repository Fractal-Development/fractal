import React from 'react';
import { Box, useTheme } from '@bma98/fractal-ui';
import { QuadrantChart, QuadrantVariant } from '@bma98/fractal-charts';
import { CalmFaceIcon, ExcitedFaceIcon, FrustratedFaceIcon, DiscouragedFaceIcon } from './icons';

export function QuadrantChartExample(): JSX.Element {
    const { spacings } = useTheme();
    const renderIcon = (color: string, size: number, activeQuadrant: QuadrantVariant): JSX.Element => {
        if (activeQuadrant === 'first') {
            return <CalmFaceIcon fill={color} width={size} height={size} />;
        }
        if (activeQuadrant === 'second') {
            return <ExcitedFaceIcon fill={color} width={size} height={size} />;
        }
        if (activeQuadrant === 'third') {
            return <FrustratedFaceIcon fill={color} width={size} height={size} />;
        }
        return <DiscouragedFaceIcon fill={color} width={size} height={size} />;
    };

    return (
        <Box marginBottom={spacings.m} maxWidth={400}>
            <QuadrantChart
                height={300}
                data={[24, 1, 2, 3]}
                positiveYAxisLabel='Sí acepto'
                negativeYAxisLabel='No acepto'
                positiveXAxisLabel='Sí puedo cambiar'
                negativeXAxisLabel='No puedo cambiar'
                firstQuadrantLabel='Tranquilidad/Paz'
                secondQuadrantLabel='Entusiasmo/Alegría'
                thirdQuadrantLabel='Frustración/Enojo'
                fourthQuadrantLabel='Desánimo/Apatía'
                renderQuadrantIcon={renderIcon}
                showIconInQuadrant='first'
                colors={{
                    firstQuadrant: '#fec201',
                    secondQuadrant: '#00a5b5',
                    thirdQuadrant: '#fd4e15',
                    fourthQuadrant: '#10164a'
                }}
            />
        </Box>
    );
}
