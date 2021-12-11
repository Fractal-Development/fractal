import React, { createContext, useState } from 'react';
export const TabBarItemsHistoryContext = createContext([new Map(), () => { }]);
export function TabBarItemsHistoryProvider({ children }) {
    const handleState = useState(new Map());
    return React.createElement(TabBarItemsHistoryContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=TabBarItemsHistoryProvider.js.map