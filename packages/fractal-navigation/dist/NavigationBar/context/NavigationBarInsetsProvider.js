import React, { createContext, useState } from 'react';
import { cleanEdgeInsets } from './util/cleanEdgeInsets';
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