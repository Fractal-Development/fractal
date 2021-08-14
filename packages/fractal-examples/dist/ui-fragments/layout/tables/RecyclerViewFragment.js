import React, { useMemo, useState } from 'react';
import { Layer, LayoutProvider, MemoizedBaseRow, AutoSizeRecyclerView, Text, useTheme, Box } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { dataProvider, itemHeightCalculator, rowRenderer, tableDummyData } from './util/tableHelpers';
const heights = tableDummyData.map(() => undefined);
function TitleRow() {
    const { colors } = useTheme();
    return (React.createElement(MemoizedBaseRow, { addSeparator: true },
        React.createElement(Text, { color: colors.label, fontWeight: 700 }, "NOMBRE")));
}
export function RecyclerViewFragment() {
    const [dataProviderState] = useState(dataProvider.cloneWithRows(tableDummyData));
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
                height = itemHeightCalculator();
                heights[index] = height;
                dim.height = height;
            }
            dim.width = width;
            return;
        });
    }, [width]);
    return (React.createElement(Box, { flex: 1 },
        React.createElement(TitleRow, null),
        React.createElement(Layer, { flex: 1 },
            React.createElement(AutoSizeRecyclerView, { layoutProvider: layoutProvider, dataProvider: dataProviderState, rowRenderer: rowRenderer, initialRenderIndex: 1000 }))));
}
//# sourceMappingURL=RecyclerViewFragment.js.map