import React, { createContext, useState } from 'react';
export const UserDocumentContext = createContext([
    undefined,
    () => {
        return;
    }
]);
export function UserDocumentProvider({ children }) {
    const handleState = useState(undefined);
    return React.createElement(UserDocumentContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=UserDocumentProvider.js.map