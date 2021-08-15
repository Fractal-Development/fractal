import React from 'react';
import { useNavigationBarChildren } from '../../hooks';
import { NavigationBarBackground, NavigationBarCenter, NavigationBarLeft, NavigationBarRight } from './components';
import { useSetNavigationBarInsets } from '../../hooks/useSetNavigationBarInsets';
export function NavigationBar({ hidden, title, showBackButton = false, backTitle, children, goBack }) {
    const [leftChild, centerChild, rightChild] = useNavigationBarChildren(children);
    useSetNavigationBarInsets();
    return hidden ? null : (React.createElement(NavigationBarBackground, null,
        React.createElement(NavigationBarLeft, { showBackButton: showBackButton, goBack: goBack, backTitle: backTitle }, leftChild),
        React.createElement(NavigationBarCenter, { title: title }, centerChild),
        React.createElement(NavigationBarRight, null, rightChild)));
}
//# sourceMappingURL=index.js.map