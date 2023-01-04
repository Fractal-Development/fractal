import React from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer, ScrollView } from '@bma98/fractal-ui';
import { HorizontalFlatListFragment, VerticalFlatListFragment } from '../fragments/ui-fragments';

export function ListsFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView>
                <PaddingLayer>
                    <HorizontalFlatListFragment />
                    <VerticalFlatListFragment />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}
