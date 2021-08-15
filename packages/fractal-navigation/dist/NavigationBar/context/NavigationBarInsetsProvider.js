import React, { createContext, useState } from 'react';
const cleanEdgeInsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};
export const NavigationBarInsetsContext = createContext([
    cleanEdgeInsets,
    () => {
        return;
    }
]);
export function NavigationBarInsetsProvider({ children }) {
    const handleState = useState(cleanEdgeInsets);
    return React.createElement(NavigationBarInsetsContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=NavigationBarInsetsProvider.js.map