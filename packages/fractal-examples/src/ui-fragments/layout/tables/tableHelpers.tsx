import React from 'react';
import { DataProvider, DetailsRow, lightFractalTheme } from '@bma98/fractal-ui';

const tableDummyData = Array<number>();
const horizontalTableDummyData = Array<number>();

for (let i = 0; i < 1001; i++) {
    tableDummyData.push(i);
}

for (let i = 0; i < 10; i++) {
    horizontalTableDummyData.push(i);
}

const rowRenderer = (_: any, __: any, index: number | undefined) => {
    const text = index != null ? `${tableDummyData[index]}` : 'No index';
    return <DetailsRow title={text} details={text} addSeparator={index !== tableDummyData.length - 1} />;
};

const dataProvider = new DataProvider((rowOne, rowTwo) => {
    return rowOne !== rowTwo;
});

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function itemHeightCalculator(): number {
    return randomIntFromInterval(lightFractalTheme.sizes.baseRowHeight, 200);
}

export { tableDummyData, horizontalTableDummyData, rowRenderer, dataProvider, itemHeightCalculator };
