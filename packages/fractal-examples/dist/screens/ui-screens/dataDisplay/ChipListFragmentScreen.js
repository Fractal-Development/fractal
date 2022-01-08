import React from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { ChipListFragment } from '../../../fragments/ui-fragments';
export function ChipListFragmentScreen() {
    return (React.createElement(NavigationBarInsetsLayer, null,
        React.createElement(PaddingLayer, { flex: 1 },
            React.createElement(ChipListFragment, null))));
}
//# sourceMappingURL=ChipListFragmentScreen.js.map