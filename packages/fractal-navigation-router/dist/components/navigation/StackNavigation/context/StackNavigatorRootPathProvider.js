import React, { createContext } from 'react';
export const StackNavigatorRootPathContext = createContext('/');
export function StackNavigatorRootPathProvider({ children, initialValue }) {
    return React.createElement(StackNavigatorRootPathContext.Provider, { value: initialValue }, children);
}
//# sourceMappingURL=StackNavigatorRootPathProvider.js.map