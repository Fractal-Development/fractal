import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { ChatContentFragment } from '../fragments/messaging-fragments';

export function ChatContentFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <ChatContentFragment />
        </NavigationBarInsetsLayer>
    );
}
