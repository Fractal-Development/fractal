import React from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { ColorTabListFragment } from '../../../fragments/ui-fragments';
export function ColorTabListFragmentScreen() {
    return (React.createElement(NavigationBarInsetsLayer, null,
        React.createElement(PaddingLayer, { flex: 1 },
            React.createElement(ColorTabListFragment, null))));
}
//# sourceMappingURL=ColorTabListFragmentScreen.js.map