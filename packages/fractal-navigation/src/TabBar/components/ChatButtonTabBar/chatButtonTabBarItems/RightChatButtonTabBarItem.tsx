import { Layer, useTheme } from '@bma98/fractal-ui';
import React from 'react';

import { ChatButton } from './ChatButton';
import { RightShapeIcon } from './assets/RightShape';

interface RightChatButtonTabBarItemProps {
    onPress: () => void;
}

export function RightChatButtonTabBarItem({ onPress }: RightChatButtonTabBarItemProps): JSX.Element {
    const { tabBar } = useTheme();

    return (
        <Layer flexDirection='row'>
            <Layer width={61} height={75}>
                <ChatButton position='absolute' top={9} right={32} onPress={onPress} />
                <RightShapeIcon fill={tabBar.backgroundColor} />
            </Layer>
            <Layer flex={1} backgroundColor={tabBar.backgroundColor} />
        </Layer>
    );
}
