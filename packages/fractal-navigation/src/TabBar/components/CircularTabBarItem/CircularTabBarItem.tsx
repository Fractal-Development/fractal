import React from 'react';
import { useTheme, Layer } from '@bma98/fractal-ui';
import { useValueForLargeSizeType } from '@bma98/size-class';
import { TabBarProps } from '../../types';
import { TabBar } from '../TabBar';
import { CircularTabBarItemLink } from './CircularTabBarItemLink';

interface CircularTabBarItemProps extends TabBarProps {
    onCircularTabBarItemPress: () => void;
    rendertabBarItemsBeforeCirularItem: Array<JSX.Element>;
    rendertabBarItemsAfterCirularItem: Array<JSX.Element>;
}

export function CircularTabBarItem(props: CircularTabBarItemProps): JSX.Element {
    const { tabBar, colors } = useTheme();
    const { tabBarPosition, logo, rendertabBarItemsBeforeCirularItem, rendertabBarItemsAfterCirularItem, onCircularTabBarItemPress } =
        props;
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
                {rendertabBarItemsBeforeCirularItem}
            </Layer>
            <CircularTabBarItemLink tabBarPosition={tabBarPosition} goToTab={onCircularTabBarItemPress} />
            <Layer flex={1} boxShadow={shadow} backgroundColor={tabBar.backgroundColor} {...tabBarItemContainerStyle}>
                {rendertabBarItemsAfterCirularItem}
            </Layer>
        </TabBar>
    );
}
