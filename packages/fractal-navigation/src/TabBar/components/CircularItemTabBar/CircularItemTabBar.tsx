import React from 'react';
import { useTheme, Layer } from '@bma98/fractal-ui';
import { useValueForLargeSizeType } from '@bma98/size-class';
import { SimpleTabBarItemLink } from '@bma98/fractal-navigation-router';
import { TabBarProps } from '../../types';
import { TabBar } from '../TabBar';
import { CircularTabBarItemLink } from './CircularTabBarItemLink';

interface CircularItemTabBarProps extends TabBarProps {
    circularItemPath: string;
    tabBarItemsBeforeCirularItem?: Array<{
        path: string;
        title: string;
        icon: (color: string, size: number) => JSX.Element;
    }>;
    tabBarItemsAfterCirularItem?: Array<{
        path: string;
        title: string;
        icon: (color: string, size: number) => JSX.Element;
    }>;
}

export function CircularItemTabBar(props: CircularItemTabBarProps): JSX.Element {
    const { tabBar } = useTheme();
    const { tabBarPosition, logo, circularItemPath, tabBarItemsBeforeCirularItem, tabBarItemsAfterCirularItem } = props;
    const logoForLargeSizeType = useValueForLargeSizeType('width', logo, undefined);
    const tabBarItemContainerStyle = useValueForLargeSizeType<{ flexDirection?: 'row' }>('width', {}, { flexDirection: 'row' });
    const shadow =
        tabBarPosition === 'bottom' ? tabBar.shadow : tabBarPosition === 'left' ? tabBar.leftPositionShadow : tabBar.rightPositionShadow;

    return (
        <TabBar boxShadow={undefined} paddingTop={0} {...props}>
            <Layer
                flex={1}
                justifyContent='flex-end'
                backgroundColor={tabBar.backgroundColor}
                boxShadow={shadow}
                {...tabBarItemContainerStyle}
            >
                {logoForLargeSizeType}
                {tabBarItemsBeforeCirularItem &&
                    tabBarItemsBeforeCirularItem.map((tabBarItemBeforeCirularItem, key) => (
                        <SimpleTabBarItemLink key={key} path={tabBarItemBeforeCirularItem.path} title={tabBarItemBeforeCirularItem.title}>
                            {tabBarItemBeforeCirularItem.icon}
                        </SimpleTabBarItemLink>
                    ))}
            </Layer>
            <CircularTabBarItemLink tabBarPosition={tabBarPosition} path={circularItemPath} />
            <Layer flex={1} backgroundColor={tabBar.backgroundColor} boxShadow={shadow} {...tabBarItemContainerStyle}>
                {tabBarItemsAfterCirularItem &&
                    tabBarItemsAfterCirularItem.map((tabBarItemBeforeCirularItem, key) => (
                        <SimpleTabBarItemLink key={key} path={tabBarItemBeforeCirularItem.path} title={tabBarItemBeforeCirularItem.title}>
                            {tabBarItemBeforeCirularItem.icon}
                        </SimpleTabBarItemLink>
                    ))}
            </Layer>
        </TabBar>
    );
}
