import React, { ReactElement } from 'react';
import { StackScreen } from '@bma98/fractal-navigation-router';
import { NavigationLayer } from '../../../fractal-navigation/src';
import { RecyclerViewFragment } from '../ui-fragments';
import { NavigationBarConfig } from '../../../fractal-navigation-router/src';

export function RecyclerViewFragmentScreen(): ReactElement {
    return (
        <StackScreen navBarConfig={<NavigationBarConfig title={'RecyclerViewFragment'} />} path={'/recycler_view_fragment_screen'}>
            <NavigationLayer>
                <RecyclerViewFragment />
            </NavigationLayer>
        </StackScreen>
    );
}
