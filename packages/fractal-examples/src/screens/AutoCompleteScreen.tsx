import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer } from '@fractal-software/fractal-ui';
import { AutocompleteFragment } from '../fragments/ui-fragments';

export function AutoCompleteScreen() {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <AutocompleteFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
