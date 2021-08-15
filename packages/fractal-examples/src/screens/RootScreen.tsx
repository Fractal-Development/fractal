import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import {
    DetailsRow,
    Layer,
    LayoutProvider,
    PaddingLayer,
    SearchBar,
    TableContainer,
    TouchableOpacity,
    useTheme,
    AutoSizeRecyclerView
} from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { StackScreen, useHistory, NavigationBarConfig } from '@bma98/fractal-navigation-router';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { dataProvider } from '../ui-fragments/layout/tables/util/tableHelpers';
import { componentScreens, Screen, lastScreenIndex } from './util/screens';
import { routes } from './util/routes';

export function RootScreen(): ReactElement {
    const [dataProviderState] = useState(dataProvider.cloneWithRows(componentScreens));
    const width = useSizeValue('width');
    const { sizes, spacings } = useTheme();
    const history = useHistory();

    const layoutProvider = useMemo(() => {
        return new LayoutProvider(
            () => {
                return 0;
            },
            (_, dim) => {
                dim.height = sizes.baseRowHeight;
                dim.width = width;
                return;
            }
        );
    }, [width, sizes.baseRowHeight]);

    const rowRenderer = useCallback(
        (_, data: Screen, index: number | undefined) => {
            const goToItem = () => {
                history.push(data.path);
            };

            return (
                <TouchableOpacity onPress={goToItem}>
                    <DetailsRow title={data.name} details={data.path} addSeparator={index !== lastScreenIndex} />
                </TouchableOpacity>
            );
        },
        [history]
    );

    return (
        <StackScreen navBarConfig={<NavigationBarConfig title={'Fragments'} largeTitle />} isRootRoute path={routes.components}>
            <NavigationLayer>
                <PaddingLayer flex={1}>
                    <TableContainer title='TableContainer Example' flex={1}>
                        <SearchBar placeholder={'Buscar'} buttonText={'Buscar'} marginBottom={spacings.lg} enableSearchButton />
                        <Layer flex={1}>
                            <AutoSizeRecyclerView
                                layoutProvider={layoutProvider}
                                dataProvider={dataProviderState}
                                rowRenderer={rowRenderer}
                            />
                        </Layer>
                    </TableContainer>
                </PaddingLayer>
            </NavigationLayer>
        </StackScreen>
    );
}
