import { Layer, useTheme } from '@bma98/fractal-ui';
import React from 'react';

import { ChatButton } from './ChatButton';
import { LeftShapeIcon } from './assets/LeftShape';

interface LeftChatButtonTabBarItemProps {
    onPress: () => void;
}

export function LeftChatButtonTabBarItem({ onPress }: LeftChatButtonTabBarItemProps): JSX.Element {
    const { tabBar } = useTheme();

    return (
        <Layer flexDirection='row'>
            <Layer flex={1} backgroundColor={tabBar.backgroundColor} />
            <Layer width={61} height={75}>
                <LeftShapeIcon fill={tabBar.backgroundColor} />
                <ChatButton position='absolute' top={9} right={-28} onPress={onPress} />
            </Layer>
        </Layer>
    );
}
