import React, { ReactElement } from 'react';
import { StackScreen, NavigationBarConfig } from '@bma98/fractal-navigation-router';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { RecyclerViewFragment } from '../ui-fragments';
import { componentScreens } from './util/screens';
import { PaddingLayer } from '@bma98/fractal-ui';

const data = componentScreens.find((item) => item.name === 'Recycler View Fragment');

export function RecyclerViewFragmentScreen(): ReactElement {
    return (
        <StackScreen navBarConfig={<NavigationBarConfig title={data?.name} />} path={data?.path}>
            <NavigationLayer>
                <PaddingLayer flex={1}>
                    <RecyclerViewFragment />
                </PaddingLayer>
            </NavigationLayer>
        </StackScreen>
    );
}
