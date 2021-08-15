import React from 'react';
import { NavigationLayer } from '@bma98/fractal-navigation';
import { RecyclerViewFragment } from '../ui-fragments';
import { PaddingLayer } from '@bma98/fractal-ui';
export function RecyclerViewFragmentScreen() {
    return (React.createElement(NavigationLayer, null,
        React.createElement(PaddingLayer, { flex: 1 },
            React.createElement(RecyclerViewFragment, null))));
}
//# sourceMappingURL=RecyclerViewFragmentScreen.js.map