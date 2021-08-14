import React, { ReactElement } from 'react';
import { StackScreen, NavigationBarConfig } from '@bma98/fractal-navigation-router';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { RecyclerViewFragment } from '../ui-fragments';

export function RecyclerViewFragmentScreen(): ReactElement {
    return (
        <StackScreen navBarConfig={<NavigationBarConfig title={'RecyclerViewFragment'} />} path={'/recycler_view_fragment_screen'}>
            <NavigationLayer>
                <RecyclerViewFragment />
            </NavigationLayer>
        </StackScreen>
    );
}
