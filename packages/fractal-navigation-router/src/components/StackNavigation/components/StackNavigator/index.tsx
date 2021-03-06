import React, { Children, useEffect, useRef } from 'react';
import { NavigationBarInsetsProvider } from '@bma98/fractal-navigation';
import { useLocation } from '../../../../router';
import { ScreenStack, ScreenStackProps } from '../ScreenStack';
import { filterMatchingChildren } from './util/filterMatchingChildren';
import { useIsRouteActive } from '../../../../hooks';
import { StackNavigatorRootPathProvider } from '../../context';
import { useStackNavigatorStyles } from './hooks/useStackNavigatorStyles';

export interface StackNavigatorProps extends Omit<ScreenStackProps, 'children'> {
    children: Array<JSX.Element> | JSX.Element;
    path?: string;
}

export function StackNavigator({ path = '', children, style, ...others }: StackNavigatorProps): JSX.Element {
    const { pathname } = useLocation();
    const isRouteActive = useIsRouteActive(path, false);
    const prevChildrenRef = useRef<Array<JSX.Element> | JSX.Element>([]);

    let childrenToRender = Children.toArray(children) as Array<JSX.Element>;
    childrenToRender = filterMatchingChildren(childrenToRender, pathname);

    const finalStyle = useStackNavigatorStyles(style);

    useEffect(() => {
        if (isRouteActive) {
            prevChildrenRef.current = childrenToRender;
        }
    }, [childrenToRender, isRouteActive]);

    return (
        <StackNavigatorRootPathProvider initialValue={path}>
            <NavigationBarInsetsProvider>
                <ScreenStack flex={1} style={finalStyle} {...others}>
                    {isRouteActive ? childrenToRender : prevChildrenRef.current}
                </ScreenStack>
            </NavigationBarInsetsProvider>
        </StackNavigatorRootPathProvider>
    );
}
