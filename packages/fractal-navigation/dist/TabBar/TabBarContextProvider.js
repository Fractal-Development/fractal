import React from 'react';
import { TabBarInsetsProvider, SafeAreaProvider, TabBarIsHiddenProvider, TabBarPositionProvider } from './context';
export function TabBarContextProvider({ children }) {
    return (React.createElement(SafeAreaProvider, null,
        React.createElement(TabBarPositionProvider, null,
            React.createElement(TabBarIsHiddenProvider, null,
                React.createElement(TabBarInsetsProvider, null, children)))));
}
//# sourceMappingURL=TabBarContextProvider.js.map