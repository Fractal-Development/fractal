import React, { createContext } from 'react';
export const StackPresentationTypeContext = createContext(undefined);
export function StackPresentationTypeProvider({ children, stackPresentation }) {
    return React.createElement(StackPresentationTypeContext.Provider, { value: stackPresentation }, children);
}
//# sourceMappingURL=StackPresentationTypeProvider.js.map