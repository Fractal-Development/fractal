import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer } from '@fractal-software/fractal-ui';
import { TextsFragment } from '../../../fragments/ui-fragments/text';

export function TextsFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer>
                <TextsFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
