import React from 'react';
import { StackScreen, NavigationBarConfig } from '@bma98/fractal-navigation-router';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { RecyclerViewFragment } from '../ui-fragments';
export function RecyclerViewFragmentScreen() {
    return (React.createElement(StackScreen, { navBarConfig: React.createElement(NavigationBarConfig, { title: 'RecyclerViewFragment' }), path: '/recycler_view_fragment_screen' },
        React.createElement(NavigationLayer, null,
            React.createElement(RecyclerViewFragment, null))));
}
//# sourceMappingURL=RecyclerViewFragmentScreen.js.map