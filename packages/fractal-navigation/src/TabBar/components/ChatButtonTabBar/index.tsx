import { useTheme, Layer } from '@bma98/fractal-ui';
import { useValueForLargeSizeType } from '@bma98/size-class';
import React from 'react';

import { TabBarProps } from '../../types';
import { TabBar } from '../TabBar';
import { ChatButtonTabBarItem } from './ChatButtonTabBarItem';

interface ChatButtonTabBarProps extends TabBarProps {
    renderTabBarItemsBeforeChatButton: JSX.Element[];
    renderTabBarItemsAfterChatButton: JSX.Element[];
    onChatButtonPress: () => void;
}

export function ChatButtonTabBar(props: ChatButtonTabBarProps): JSX.Element {
    const { tabBar, colors } = useTheme();
    const { tabBarPosition, logo, renderTabBarItemsBeforeChatButton, renderTabBarItemsAfterChatButton, onChatButtonPress } = props;
    const logoForLargeSizeType = useValueForLargeSizeType('width', logo, undefined);
    const tabBarItemContainerStyle = useValueForLargeSizeType<{ flexDirection?: 'row' }>('width', {}, { flexDirection: 'row' });
    const shadow =
        tabBarPosition === 'bottom' ? tabBar.shadow : tabBarPosition === 'left' ? tabBar.leftPositionShadow : tabBar.rightPositionShadow;

    return (
        <TabBar paddingTop={0} boxShadow={undefined} backgroundColor={colors.transparent} {...props}>
            <Layer
                flex={1}
                justifyContent='flex-end'
                boxShadow={shadow}
                backgroundColor={tabBar.backgroundColor}
                {...tabBarItemContainerStyle}
            >
                {logoForLargeSizeType}
                {renderTabBarItemsBeforeChatButton}
            </Layer>
            <ChatButtonTabBarItem tabBarPosition={tabBarPosition} goToTab={onChatButtonPress} />
            <Layer flex={1} boxShadow={shadow} backgroundColor={tabBar.backgroundColor} {...tabBarItemContainerStyle}>
                {renderTabBarItemsAfterChatButton}
            </Layer>
        </TabBar>
    );
}
