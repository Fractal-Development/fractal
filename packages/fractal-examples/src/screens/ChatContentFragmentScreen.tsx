import React, { ReactElement } from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer } from '@fractal/fractal-ui';
import { ChatContentFragment } from '../fragments/messaging-fragments';

export function ChatContentFragmentScreen(): ReactElement {
    return (
        <NavigationBarInsetsLayer>
            <PaddingLayer flex={1}>
                <ChatContentFragment />
            </PaddingLayer>
        </NavigationBarInsetsLayer>
    );
}
