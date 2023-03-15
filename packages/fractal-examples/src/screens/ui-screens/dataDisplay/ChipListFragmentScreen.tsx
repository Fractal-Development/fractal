import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer } from '@fractal/fractal-ui';
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
