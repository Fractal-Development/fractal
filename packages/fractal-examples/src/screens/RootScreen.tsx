import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { useNavigate } from '@bma98/fractal-navigation-router';
import {
    Layer,
    LayoutProvider,
    PaddingLayer,
    SearchBar,
    TableContainer,
    TouchableOpacity,
    useTheme,
    AutoSizeRecyclerView,
    SimpleRow
} from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import React, { ReactElement, useCallback, useMemo, useState } from 'react';

import { dataProvider } from '../fragments/ui-fragments/layout/tables/util/tableHelpers';
import { Screen, lastScreenIndex, screensArray } from './util/screens';

export function RootScreen(): ReactElement {
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(screensArray));
    const width = useSizeValue('width');
    const { sizes, spacings } = useTheme();
    const navigate = useNavigate();

    const layoutProvider = useMemo(
        () =>
            new LayoutProvider(
                () => 0,
                (_, dim) => {
                    dim.height = sizes.baseRowHeight;
                    dim.width = width;
                }
            ),
        [width, sizes.baseRowHeight]
    );

    const rowRenderer = useCallback(
        (_, data: Screen, index: number | undefined) => {
            const goToItem = () => {
                navigate(data.path);
            };

            return (
                <TouchableOpacity onPress={goToItem}>
                    <SimpleRow title={data.name} addSeparator={index !== lastScreenIndex} />
                </TouchableOpacity>
            );
        },
        [navigate]
    );

    const handleSearch = (search: string) => {
        if (search === '') {
            setDataProviderState(dataProvider.cloneWithRows(screensArray));
        } else {
            setDataProviderState(dataProvider.cloneWithRows(screensArray.filter((row) => row.name.includes(search))));
        }
    };

    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <TableContainer title='Table Container' flex={1}>
                    <SearchBar
                        placeholder='Buscar'
                        buttonText='Buscar'
                        marginBottom={spacings.lg}
                        enableSearchButton
                        onSearch={handleSearch}
                    />
                    <Layer flex={1}>
                        <AutoSizeRecyclerView layoutProvider={layoutProvider} dataProvider={dataProviderState} rowRenderer={rowRenderer} />
                    </Layer>
                </TableContainer>
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
