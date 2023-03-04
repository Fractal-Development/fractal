import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer } from '@fractal/fractal-ui';
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
