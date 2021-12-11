import React, { createContext, useState } from 'react';
const cleanEdgeInsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};
export const TabBarInsetsContext = createContext([cleanEdgeInsets, () => { }]);
export function TabBarInsetsProvider({ children }) {
    const handleState = useState(cleanEdgeInsets);
    return React.createElement(TabBarInsetsContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=TabBarInsetsProvider.js.map