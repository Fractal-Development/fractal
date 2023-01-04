import { Layer, useTheme } from '@bma98/fractal-ui';
import React from 'react';

import { ChatButton } from './ChatButton';
import { BottomShapeIcon } from './assets/BottomShape';

interface BottomChatButtonTabBarItemProps {
    onPress: () => void;
}

export function BottomChatButtonTabBarItem({ onPress }: BottomChatButtonTabBarItemProps): JSX.Element {
    const { tabBar, colors } = useTheme();

    return (
        <Layer>
            <Layer width={74} height={61} backgroundColor={colors.background}>
                <BottomShapeIcon fill={tabBar.backgroundColor} />
                <ChatButton position='absolute' top={-28} right={9} onPress={onPress} />
            </Layer>
            <Layer flex={1} backgroundColor={tabBar.backgroundColor} />
        </Layer>
    );
}
