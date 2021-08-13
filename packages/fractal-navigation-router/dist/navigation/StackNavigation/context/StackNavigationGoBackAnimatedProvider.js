import React, { createContext } from 'react';
export const StackNavigationGoBackAnimatedContext = createContext(() => {
    return;
});
export function StackNavigationGoBackAnimatedProvider({ children, goBackAnimated }) {
    return React.createElement(StackNavigationGoBackAnimatedContext.Provider, { value: goBackAnimated }, children);
}
//# sourceMappingURL=StackNavigationGoBackAnimatedProvider.js.map