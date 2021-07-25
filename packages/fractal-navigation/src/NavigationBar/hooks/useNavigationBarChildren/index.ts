import React, { useMemo } from 'react';
import { NavigationBarCenterView, NavigationBarLeftView, NavigationBarRightView } from '../../navigationBarViews';

export function useNavigationBarChildren(
    children: Array<JSX.Element> | JSX.Element | undefined
): [JSX.Element | null, JSX.Element | null, JSX.Element | null] {
    return useMemo(() => {
        let leftChild: JSX.Element | null = null;
        let centerChild: JSX.Element | null = null;
        let rightChild: JSX.Element | null = null;

        React.Children.forEach(children, (child) => {
            if (child?.type === NavigationBarLeftView) {
                leftChild = child;
            } else if (child?.type === NavigationBarCenterView) {
                centerChild = child;
            } else if (child?.type === NavigationBarRightView) {
                rightChild = child;
            }
        });
        return [leftChild, centerChild, rightChild];
    }, [children]);
}
