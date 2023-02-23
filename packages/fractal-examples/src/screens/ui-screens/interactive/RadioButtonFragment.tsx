import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer } from '@fractal/fractal-ui';
import { RadioButtonFragment, RadioGroupFragment } from '../../../fragments/ui-fragments/interactive';

export function RadioButtonFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer>
                <RadioButtonFragment />
                <RadioGroupFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
