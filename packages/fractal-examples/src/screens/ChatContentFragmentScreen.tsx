import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { ChatContentFragment } from '../messaging-fragments';

export function ChatContentFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <ChatContentFragment />
        </NavigationBarInsetsLayer>
    );
}
