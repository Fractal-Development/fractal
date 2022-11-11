import { LoadingBackground } from '@bma98/fractal-ui';
import React, { useEffect } from 'react';
import { useAuthenticationState } from '../../hooks/useAuthenticationState';
import { useUserDocument } from '../../hooks';
export function CreateUserScreen({ createUser, children }) {
    var _a;
    const { firebaseUser } = useAuthenticationState();
    const userDocument = useUserDocument();
    useEffect(() => {
        var _a;
        if (firebaseUser != null && userDocument === undefined) {
            createUser(firebaseUser.uid, (_a = firebaseUser.email) !== null && _a !== void 0 ? _a : '');
        }
    }, [createUser, firebaseUser, userDocument]);
    return (_a = React.createElement(React.Fragment, null, children)) !== null && _a !== void 0 ? _a : React.createElement(LoadingBackground, null);
}
//# sourceMappingURL=CreateUserScreen.js.map