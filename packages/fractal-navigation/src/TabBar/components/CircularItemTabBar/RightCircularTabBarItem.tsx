import React from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { ChatButton } from './ChatButton';
import { RightShapeIcon } from '../../assets/RightShape';

interface RightCircularTabBarItemProps {
    onPress: () => void;
}

export function RightCircularTabBarItem({ onPress }: RightCircularTabBarItemProps): JSX.Element {
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
