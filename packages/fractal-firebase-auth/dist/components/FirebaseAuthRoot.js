import { AuthenticationStateProvider, UserDocumentProvider } from '../context';
import React from 'react';
import { Authenticate } from './Authenticate';
export function FirebaseAuthRoot(props) {
    return (React.createElement(AuthenticationStateProvider, null,
        React.createElement(UserDocumentProvider, null,
            React.createElement(Authenticate, Object.assign({}, props)))));
}
//# sourceMappingURL=FirebaseAuthRoot.js.map