import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@bma98/fractal-navigation';
import { ChatContentFragment } from '../messaging-fragments';
import { PaddingLayer } from '@bma98/fractal-ui';

export function ChatContentFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <ChatContentFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
