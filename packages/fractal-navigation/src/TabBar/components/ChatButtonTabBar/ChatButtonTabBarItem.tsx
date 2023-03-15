import React from 'react';

import { BottomChatButtonTabBarItem, LeftChatButtonTabBarItem, RightChatButtonTabBarItem } from './chatButtonTabBarItems';

interface ChatButtonTabBarItemProps {
    tabBarPosition: 'left' | 'bottom' | 'right';
    goToTab: () => void;
}

export function ChatButtonTabBarItem({ tabBarPosition, goToTab }: ChatButtonTabBarItemProps): JSX.Element {
    switch (tabBarPosition) {
        case 'left':
            return <LeftChatButtonTabBarItem onPress={goToTab} />;
        case 'right':
            return <RightChatButtonTabBarItem onPress={goToTab} />;
        case 'bottom':
            return <BottomChatButtonTabBarItem onPress={goToTab} />;
        default:
            return <LeftChatButtonTabBarItem onPress={goToTab} />;
    }
}
