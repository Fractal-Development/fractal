import React from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { RecyclerViewFragment } from '../ui-fragments';
export function RecyclerViewFragmentScreen() {
    return (React.createElement(NavigationBarInsetsLayer, null,
        React.createElement(PaddingLayer, { flex: 1 },
            React.createElement(RecyclerViewFragment, null))));
}
//# sourceMappingURL=RecyclerViewFragmentScreen.js.map