import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer } from '@fractal-software/fractal-ui';
import { ToastFragment } from '../../../fragments/ui-fragments/overlays/toast/ToastFragment';

export function ToastFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer>
                <ToastFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
