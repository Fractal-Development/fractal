import React from 'react';
import { lightFractalTheme, DataProvider, DetailsRow, PaddingLayer, Box, Text, colors } from '@bma98/fractal-ui';

const tableDummyData = Array<number>();

for (let i = 0; i < 1001; i++) {
    tableDummyData.push(i);
}

const rowRenderer = (_: any, __: any, index: number | undefined) => {
    const text = index != null ? `${tableDummyData[index]}` : 'No index';
    return <DetailsRow title={text} details={text} addSeparator={index !== tableDummyData.length - 1} />;
};

const rowRendererHorizontalTable = (_: any, __: any, index: number | undefined) => {
    const text = index != null ? `${tableDummyData[index]}` : 'No index';
    return (
        <PaddingLayer backgroundColor={colors.contentInteractiveColor}>
            <Box alignItems="center" justifyContent="center">
                <Text variant="normal">{text}</Text>
            </Box>
        </PaddingLayer>
    );
};

const dataProvider = new DataProvider((rowOne, rowTwo) => rowOne !== rowTwo);

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function itemHeightCalculator(): number {
    return randomIntFromInterval(lightFractalTheme.sizes.baseRowHeight, 200);
}

export { tableDummyData, rowRenderer, rowRendererHorizontalTable, dataProvider, itemHeightCalculator };
