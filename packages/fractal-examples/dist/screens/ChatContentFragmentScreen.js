import React from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { PaddingLayer } from '@bma98/fractal-ui';
import { ChatContentFragment } from '../messaging-fragments';
export function ChatContentFragmentScreen() {
    return (React.createElement(NavigationBarInsetsLayer, null,
        React.createElement(PaddingLayer, { flex: 1 },
            React.createElement(ChatContentFragment, null))));
}
//# sourceMappingURL=ChatContentFragmentScreen.js.map