import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer } from '@fractal-software/fractal-ui';
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
