import React, { ReactElement, useCallback, useMemo, useState } from 'react';
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
import { useHistory } from '@bma98/fractal-navigation-router';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { dataProvider } from '../fragments/ui-fragments/layout/tables/util/tableHelpers';
import { Screen, lastScreenIndex, screensArray } from './util/screens';

export function RootScreen(): ReactElement {
    const [dataProviderState] = useState(dataProvider.cloneWithRows(screensArray));
    const width = useSizeValue('width');
    const { sizes, spacings } = useTheme();
    const history = useHistory();

    const layoutProvider = useMemo(
        () =>
            new LayoutProvider(
                () => 0,
                (_, dim) => {
                    dim.height = sizes.baseRowHeight;
                    dim.width = width;
                    return;
                }
            ),
        [width, sizes.baseRowHeight]
    );

    const rowRenderer = useCallback(
        (_, data: Screen, index: number | undefined) => {
            const goToItem = () => {
                history.push(data.path);
            };

            return (
                <TouchableOpacity onPress={goToItem}>
                    <SimpleRow title={data.name} addSeparator={index !== lastScreenIndex} />
                </TouchableOpacity>
            );
        },
        [history]
    );

    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <TableContainer title='Table Container' flex={1}>
                    <SearchBar placeholder='Buscar' buttonText='Buscar' marginBottom={spacings.lg} enableSearchButton />
                    <Layer flex={1}>
                        <AutoSizeRecyclerView layoutProvider={layoutProvider} dataProvider={dataProviderState} rowRenderer={rowRenderer} />
                    </Layer>
                </TableContainer>
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
