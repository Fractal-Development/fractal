import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer } from '@fractal/fractal-ui';
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
