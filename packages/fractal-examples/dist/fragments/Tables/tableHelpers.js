import React from 'react';
import { DataProvider, DetailsRow } from '@bma98/fractal-ui';
const tableDummyData = Array();
for (let i = 0; i < 1001; i++) {
    tableDummyData.push(i);
}
const rowRenderer = (_, __, index) => {
    const text = index != null ? `${tableDummyData[index]}` : 'No index';
    return React.createElement(DetailsRow, { title: text, details: text });
};
const dataProvider = new DataProvider((rowOne, rowTwo) => {
    return rowOne !== rowTwo;
});
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function itemHeightCalulator() {
    return randomIntFromInterval(65, 200);
}
export { tableDummyData, rowRenderer, dataProvider, itemHeightCalulator };
//# sourceMappingURL=tableHelpers.js.map