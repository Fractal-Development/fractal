import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer } from '@fractal/fractal-ui';
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
