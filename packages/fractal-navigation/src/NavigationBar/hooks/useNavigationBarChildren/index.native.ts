import React, { useMemo } from 'react';
import { ScreenStackHeaderCenterView, ScreenStackHeaderLeftView, ScreenStackHeaderRightView } from 'react-native-screens';

export function useNavigationBarChildren(
    children: Array<JSX.Element> | JSX.Element | undefined
): [JSX.Element | null, JSX.Element | null, JSX.Element | null] {
    return useMemo(() => {
        let leftChild: JSX.Element | null = null;
        let centerChild: JSX.Element | null = null;
        let rightChild: JSX.Element | null = null;

        React.Children.forEach(children, (child) => {
            if (child?.type === ScreenStackHeaderLeftView) {
                leftChild = child;
            } else if (child?.type === ScreenStackHeaderCenterView) {
                centerChild = child;
            } else if (child?.type === ScreenStackHeaderRightView) {
                rightChild = child;
            }
        });
        return [leftChild, centerChild, rightChild];
    }, [children]);
}
