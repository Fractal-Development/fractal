import React from 'react';
import { DataProvider, DetailsRow } from '@bma98/fractal-ui';

const tableDummyData = Array<number>();

for (let i = 0; i < 1001; i++) {
    tableDummyData.push(i);
}

const rowRenderer = (_: any, __: any, index: number | undefined) => {
    const text = index != null ? `${tableDummyData[index]}` : 'No index';
    return <DetailsRow title={text} details={text} />;
};
const dataProvider = new DataProvider((rowOne, rowTwo) => {
    return rowOne !== rowTwo;
});

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function itemHeightCalulator(): number {
    return randomIntFromInterval(65, 200);
}

export { tableDummyData, rowRenderer, dataProvider, itemHeightCalulator };
