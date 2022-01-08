import React from 'react';
import { lightFractalTheme, DataProvider, DetailsRow, PaddingLayer, Box, Text, colors } from '@bma98/fractal-ui';
const tableDummyData = Array();
for (let i = 0; i < 1001; i++) {
    tableDummyData.push(i);
}
const rowRenderer = (_, __, index) => {
    const text = index != null ? `${tableDummyData[index]}` : 'No index';
    return React.createElement(DetailsRow, { title: text, details: text, addSeparator: index !== tableDummyData.length - 1 });
};
const rowRendererHorizontalTable = (_, __, index) => {
    const text = index != null ? `${tableDummyData[index]}` : 'No index';
    return (React.createElement(PaddingLayer, { backgroundColor: colors.contentInteractiveColor },
        React.createElement(Box, { alignItems: "center", justifyContent: "center" },
            React.createElement(Text, { variant: "normal" }, text))));
};
const dataProvider = new DataProvider((rowOne, rowTwo) => rowOne !== rowTwo);
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function itemHeightCalculator() {
    return randomIntFromInterval(lightFractalTheme.sizes.baseRowHeight, 200);
}
export { tableDummyData, rowRenderer, rowRendererHorizontalTable, dataProvider, itemHeightCalculator };
//# sourceMappingURL=tableHelpers.js.map