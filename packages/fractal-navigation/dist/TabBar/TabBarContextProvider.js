import React from 'react';
import { TabBarPositionProvider } from './context/TabBarPositionProvider';
import { TabBarIsHiddenProvider } from './context/TabBarIsHiddenProvider';
import { TabBarInsetsProvider } from './context/TabBarInsetsProvider';
export function TabBarContextProvider({ children }) {
    return (React.createElement(TabBarPositionProvider, null,
        React.createElement(TabBarIsHiddenProvider, null,
            React.createElement(TabBarInsetsProvider, null, children))));
}
//# sourceMappingURL=TabBarContextProvider.js.map