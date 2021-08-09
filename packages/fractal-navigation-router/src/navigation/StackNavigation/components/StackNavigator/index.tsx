import React, { Children, useEffect, useRef } from 'react';
import { useLocation } from '../../../../router';
import { ScreenStack, ScreenStackProps } from '../ScreenStack';
import { filterMatchingChildren } from './util/filterMatchingChildren';
import { useIsRouteActive } from '../../../../hooks/useIsRouteActive';
import { StackNavigatorRootPathProvider } from '../../context/StackNavigatorRootPathProvider';
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
            <ScreenStack style={finalStyle} {...others}>
                {isRouteActive ? childrenToRender : prevChildrenRef.current}
            </ScreenStack>
        </StackNavigatorRootPathProvider>
    );
}
