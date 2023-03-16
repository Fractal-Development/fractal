import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer } from '@fractal-software/fractal-ui';
import { ChipListFragment } from '../../../fragments/ui-fragments';

export function ChipListFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <ChipListFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
