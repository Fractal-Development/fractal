import { Button, ButtonProps, AnimatePresence } from '@bma98/fractal-ui';
import React from 'react';

import { useTabBarIsHidden } from '../../../hooks';
import { MessageIcon } from './assets/MessageIcon';

function renderMessageIcon(color: string, size: number): JSX.Element {
    return <MessageIcon fill={color} height={size} width={size} />;
}

export function ChatButton(props: ButtonProps): JSX.Element {
    const tabBarIsHidden = useTabBarIsHidden();
    return (
        <AnimatePresence>
            {!tabBarIsHidden && (
                <Button exit={{ scale: 0 }} variant='alternative' width={56} height={56} borderRadius={28} {...props}>
                    {renderMessageIcon('white', 28)}
                </Button>
            )}
        </AnimatePresence>
    );
}
