import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer } from '@fractal/fractal-ui';
import { IconsFragment } from '../fragments/ui-fragments/IconsFragment';

export function IconsFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer>
                <IconsFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
