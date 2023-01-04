import { ChatButtonTabBar } from '@bma98/fractal-navigation';
import { SimpleTabBarItemLink, useGoToTab, useIsRouteActive } from '@bma98/fractal-navigation-router';
import { BugIcon, FileIcon, SearchIcon } from '@bma98/fractal-ui';
import { useValueForLargeSizeType } from '@bma98/size-class';
import React, { ReactElement } from 'react';

import { ReactIcon } from './assets/ReactIcon';
import { routes } from './screens/util/routes';

export function ChatButtonTabBarExample(): ReactElement {
    const tabBarPosition = useValueForLargeSizeType('width', 'left', 'bottom');
    const isRouteActive = useIsRouteActive('/chat', false);
    const goToTab = useGoToTab('/chat', isRouteActive);

    return (
        <ChatButtonTabBar
            tabBarPosition={tabBarPosition}
            renderTabBarItemsBeforeChatButton={[
                <SimpleTabBarItemLink key={routes.components} path={routes.components} title='Componentes'>
                    {(color, size) => <FileIcon fill={color} width={size} height={size} />}
                </SimpleTabBarItemLink>,
                <SimpleTabBarItemLink key={routes.credits} path={routes.credits} title='Creditos'>
                    {(color, size) => <ReactIcon fill={color} width={size} height={size} />}
                </SimpleTabBarItemLink>
            ]}
            renderTabBarItemsAfterChatButton={[
                <SimpleTabBarItemLink key='/Search' path='/Search' title='Buscar'>
                    {(color, size) => <SearchIcon fill={color} width={size} height={size} />}
                </SimpleTabBarItemLink>,
                <SimpleTabBarItemLink key='/Bug' path='/Bug' title='Bug'>
                    {(color, size) => <BugIcon fill={color} width={size} height={size} />}
                </SimpleTabBarItemLink>
            ]}
            onChatButtonPress={goToTab}
        />
    );
}
