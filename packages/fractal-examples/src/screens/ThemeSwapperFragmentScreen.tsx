import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer } from '@fractal-software/fractal-ui';
import { ThemeSwapperFragment } from '../fragments/ui-fragments/ThemeSwapperFragment';

export function ThemeSwapperFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer>
                <ThemeSwapperFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
