import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer } from '@fractal/fractal-ui';
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
