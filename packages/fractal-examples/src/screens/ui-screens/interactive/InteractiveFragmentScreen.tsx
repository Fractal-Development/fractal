import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal-software/fractal-ui';
import {
    CheckBoxFragment,
    DropZoneFragment,
    SegmentedControlFragment,
    SliderFragment,
    SwitchFragment
} from '../../../fragments/ui-fragments';

export function InteractiveFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView flex={1}>
                <PaddingLayer>
                    <CheckBoxFragment />
                    <DropZoneFragment />
                    <SegmentedControlFragment />
                    <SliderFragment />
                    <SwitchFragment />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}
