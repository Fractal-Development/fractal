import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal-software/fractal-ui';
import {
    BoxContentFragment,
    GridFragment,
    GridListFragment,
    HorizontalLayerFragment,
    MarginLayerFragment,
    PaddingLayerFragment,
    SeparatorFragment,
    TableContainerFragment
} from '../../../fragments/ui-fragments';

export function LayoutFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView flex={1}>
                <PaddingLayer>
                    <GridFragment />
                    <GridListFragment />
                    <SeparatorFragment />
                    <TableContainerFragment />
                    <BoxContentFragment />
                    <HorizontalLayerFragment />
                    <MarginLayerFragment />
                    <PaddingLayerFragment />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}
