import React, { createContext, useState } from 'react';
export const TabBarPositionContext = createContext(['bottom', () => { }]);
export function TabBarPositionProvider({ children }) {
    const handleState = useState('bottom');
    return React.createElement(TabBarPositionContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=TabBarPositionProvider.js.map