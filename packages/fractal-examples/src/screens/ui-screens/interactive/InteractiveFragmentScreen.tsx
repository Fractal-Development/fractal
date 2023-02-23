import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal/fractal-ui';
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
