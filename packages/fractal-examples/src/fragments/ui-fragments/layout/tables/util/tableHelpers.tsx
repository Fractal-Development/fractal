import React from 'react';
import { lightFractalTheme, DetailsRow, PaddingLayer, Box, Text, colors } from '@fractal/fractal-ui';

const tableDummyData: Array<number> = Array.from(Array(1001).keys());

const tableItemsHeights = tableDummyData.map(() => {
    return itemHeightCalculator();
});

const rowRenderer = ({ index }) => {
    const text = index != null ? `${tableDummyData[index]}` : 'No index';
    return <DetailsRow title={text} details={text} height={tableItemsHeights[index]} addSeparator={index !== tableDummyData.length - 1} />;
};

const rowRendererHorizontalTable = ({ index }: { index: number }) => {
    const text = index != null ? `${tableDummyData[index]}` : 'No index';
    return (
        <PaddingLayer backgroundColor={colors.contentInteractiveColor}>
            <Box alignItems='center' justifyContent='center'>
                <Text variant='normal'>{text}</Text>
            </Box>
        </PaddingLayer>
    );
};

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function itemHeightCalculator(): number {
    return randomIntFromInterval(lightFractalTheme.sizes.baseRowHeight, 200);
}

export { tableDummyData, rowRenderer, rowRendererHorizontalTable, itemHeightCalculator, tableItemsHeights };
