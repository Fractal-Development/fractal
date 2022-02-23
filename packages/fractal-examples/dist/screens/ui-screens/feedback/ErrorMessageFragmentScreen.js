import React from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { ErrorMessageFragment } from '../../../fragments/ui-fragments';
export function ErrorMessageFragmentScreen() {
    return (React.createElement(NavigationBarInsetsLayer, null,
        React.createElement(PaddingLayer, { flex: 1 },
            React.createElement(ErrorMessageFragment, null))));
}
//# sourceMappingURL=ErrorMessageFragmentScreen.js.map