import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer } from '@fractal-software/fractal-ui';
import { ChipFragment } from '../../../fragments/ui-fragments';

export function ChipFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <ChipFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
