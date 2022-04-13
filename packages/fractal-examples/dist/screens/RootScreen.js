import React, { useCallback, useMemo, useState } from 'react';
import { Layer, LayoutProvider, PaddingLayer, SearchBar, TableContainer, TouchableOpacity, useTheme, AutoSizeRecyclerView, SimpleRow } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { useHistory } from '@bma98/fractal-navigation-router';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { dataProvider } from '../fragments/ui-fragments/layout/tables/util/tableHelpers';
import { lastScreenIndex, screensArray } from './util/screens';
export function RootScreen() {
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(screensArray));
    const width = useSizeValue('width');
    const { sizes, spacings } = useTheme();
    const history = useHistory();
    const layoutProvider = useMemo(() => new LayoutProvider(() => 0, (_, dim) => {
        dim.height = sizes.baseRowHeight;
        dim.width = width;
        return;
    }), [width, sizes.baseRowHeight]);
    const rowRenderer = useCallback((_, data, index) => {
        const goToItem = () => {
            history.push(data.path);
        };
        return (React.createElement(TouchableOpacity, { onPress: goToItem },
            React.createElement(SimpleRow, { title: data.name, addSeparator: index !== lastScreenIndex })));
    }, [history]);
    const handleSearch = (search) => {
        if (search === '') {
            setDataProviderState(dataProvider.cloneWithRows(screensArray));
        }
        else {
            setDataProviderState(dataProvider.cloneWithRows(screensArray.filter((row) => row.name.includes(search))));
        }
    };
    return (React.createElement(NavigationBarInsetsLayer, null,
        React.createElement(PaddingLayer, { flex: 1 },
            React.createElement(TableContainer, { title: 'Table Container', flex: 1 },
                React.createElement(SearchBar, { placeholder: 'Buscar', buttonText: 'Buscar', marginBottom: spacings.lg, enableSearchButton: true, onSearch: handleSearch }),
                React.createElement(Layer, { flex: 1 },
                    React.createElement(AutoSizeRecyclerView, { layoutProvider: layoutProvider, dataProvider: dataProviderState, rowRenderer: rowRenderer }))))));
}
//# sourceMappingURL=RootScreen.js.map