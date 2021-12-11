import React, { createContext, useState } from 'react';
export const TabBarIsHiddenContext = createContext([false, () => { }]);
export function TabBarIsHiddenProvider({ children }) {
    const handleState = useState(false);
    return React.createElement(TabBarIsHiddenContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=TabBarIsHiddenProvider.js.map