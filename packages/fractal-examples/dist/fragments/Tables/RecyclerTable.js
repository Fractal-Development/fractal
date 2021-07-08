var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useMemo, useState } from 'react';
import { SearchBar, TableContainer, useTheme, MemoizedBaseRow, HorizontalLayer, CheckBox, Layer, Text, OptionsButton, LayoutProvider, RecyclerView, DataProvider } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
// Performance is incredible when all rows have the same size(recycling is 100% effective).
// Performance is good when all rows have different sizes.
const data = Array();
for (let i = 0; i < 1001; i++) {
    data.push(i);
}
const heights = data.map(() => undefined);
export function RowExample(_a) {
    var { index = 0 } = _a, others = __rest(_a, ["index"]);
    const { spacings, colors } = useTheme();
    return (React.createElement(MemoizedBaseRow, Object.assign({ addSeparator: index !== 1000, paddingTop: spacings.s }, others),
        React.createElement(HorizontalLayer, { width: '100%', alignItems: 'center' },
            React.createElement(CheckBox, { value: false, marginRight: spacings.s }),
            React.createElement(Layer, { flex: 1 },
                React.createElement(Text, null, "Google")),
            React.createElement(Layer, { flex: 1 },
                React.createElement(Text, { numberOfLines: 1 }, "Brandon Maldonado Alonso")),
            React.createElement(Layer, { flex: 1 },
                React.createElement(Text, null, data[index])),
            React.createElement(HorizontalLayer, { flex: 1, alignItems: 'center' },
                React.createElement(Layer, { backgroundColor: colors.successInteractiveColor, width: 16, height: 16, borderRadius: 8, marginRight: spacings.s }),
                React.createElement(Text, null, "Activo")),
            React.createElement(OptionsButton, null))));
}
export function TitleRow() {
    const { colors } = useTheme();
    return (React.createElement(MemoizedBaseRow, { addSeparator: true },
        React.createElement(Text, { color: colors.label, fontWeight: 700 }, "NOMBRE")));
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function itemHeightCalulator() {
    return randomIntFromInterval(65, 200);
}
const rowRenderer = (_, __, index) => {
    return React.createElement(RowExample, { index: index });
};
const dataProvider = new DataProvider((rowOne, rowTwo) => {
    return rowOne !== rowTwo;
});
export function TableTwo() {
    const { spacings } = useTheme();
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(data));
    const width = useSizeValue('width');
    const layoutProvider = useMemo(() => {
        return new LayoutProvider(() => {
            return 0;
        }, (_, dim, index) => {
            let height = heights[index];
            if (height != null) {
                dim.height = height;
            }
            else {
                height = itemHeightCalulator();
                heights[index] = height;
                dim.height = height;
            }
            dim.width = width - 64;
            return;
        });
    }, [width]);
    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(data));
    }, [width]);
    return (React.createElement(TableContainer, { title: 'Table Two', flex: 1 },
        React.createElement(SearchBar, { placeholder: 'Buscar', buttonText: 'Buscar', marginBottom: spacings.lg, enableSearchButton: true }),
        React.createElement(TitleRow, null),
        React.createElement(Layer, { flex: 1 },
            React.createElement(RecyclerView, { key: width, layoutProvider: layoutProvider, dataProvider: dataProviderState, rowRenderer: rowRenderer, initialRenderIndex: 1000 }))));
}
export function RecyclerTable() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Table Example"),
        React.createElement(Layer, { height: 500, marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Layer, { flex: 1 },
                React.createElement(TableTwo, null)))));
}
//# sourceMappingURL=RecyclerTable.js.map