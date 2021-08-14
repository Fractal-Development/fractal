import React from 'react';
import { StackScreen } from '@bma98/fractal-navigation-router';
import { NavigationLayer } from '../../../fractal-navigation/src';
import { RecyclerViewFragment } from '../ui-fragments';
import { NavigationBarConfig } from '../../../fractal-navigation-router/src';
export function RecyclerViewFragmentScreen() {
    return (React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: 'RecyclerViewFragment' }), path: '/recycler_view_fragment_screen' },
        React.createElement(NavigationLayer, null,
            React.createElement(RecyclerViewFragment, null))));
}
//# sourceMappingURL=RecyclerViewFragmentScreen.js.map