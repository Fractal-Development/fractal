import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer } from '@fractal-software/fractal-ui';
import { AlertFragment } from '../../../fragments/ui-fragments';

export function AlertFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer>
                <AlertFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
