import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer } from '@fractal/fractal-ui';
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
