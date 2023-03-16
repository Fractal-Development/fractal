import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal-software/fractal-ui';
import {
    BlurredModalFragment,
    BottomCellModalFragment,
    DimmedModalFragment,
    MiddleCellModalFragment,
    PopoverFragment
} from '../../../fragments/ui-fragments/overlays';

export function OverlaysFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView flex={1}>
                <PaddingLayer>
                    <BlurredModalFragment />
                    <BottomCellModalFragment />
                    <DimmedModalFragment />
                    <MiddleCellModalFragment />
                    <PopoverFragment />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}
