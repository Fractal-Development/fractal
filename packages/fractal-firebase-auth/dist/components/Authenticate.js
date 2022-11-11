import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from '@bma98/fractal-navigation-router';
import { useAuthenticateChildren, useSubscribeForAuthenticatedUser, useSubscribeForUserDocument, useUserDocument } from '../hooks';
export function Authenticate({ database, children, WrapperComponent }) {
    const [app, loadingPair, authPair, createUser] = useAuthenticateChildren(children);
    const navigate = useNavigate();
    const { firebaseUser, loading } = useSubscribeForAuthenticatedUser();
    const isLoadingUserDocument = useSubscribeForUserDocument(firebaseUser, database);
    const userDocument = useUserDocument();
    const Wrapper = WrapperComponent !== null && WrapperComponent !== void 0 ? WrapperComponent : React.Fragment;
    const isLoadingFirebaseUser = firebaseUser === undefined && loading;
    const isFirebaseUserMissing = firebaseUser === null && !loading;
    const isUserDocumentMissing = userDocument == null;
    const firebaseAuthenticationState = (() => {
        if (isLoadingFirebaseUser) {
            return 'loading';
        }
        if (isFirebaseUserMissing) {
            return 'firebaseUserIsMissing';
        }
        if (isLoadingUserDocument && isUserDocumentMissing) {
            return 'loading';
        }
        if (!isLoadingUserDocument && isUserDocumentMissing) {
            return 'firestoreUserDocumentIsMissing';
        }
        if (!isLoadingUserDocument && !isUserDocumentMissing) {
            return 'accessIsAllowed';
        }
        return 'loading';
    })();
    const authenticationState = (() => {
        if (firebaseAuthenticationState === 'loading') {
            return 'loading';
        }
        if (firebaseAuthenticationState === 'firebaseUserIsMissing') {
            return 'accessIsNotAllowed';
        }
        if (firebaseAuthenticationState === 'firestoreUserDocumentIsMissing') {
            return 'accessIsNotAllowed';
        }
        return 'accessIsAllowed';
    })();
    useEffect(() => {
        const redirectTo = () => {
            if (firebaseAuthenticationState === 'firebaseUserIsMissing') {
                return navigate(authPair.route, { replace: true });
            }
            if (firebaseAuthenticationState === 'firestoreUserDocumentIsMissing') {
                return navigate(createUser.route, { replace: true });
            }
            return navigate(app.route, { replace: true });
        };
        switch (authenticationState) {
            case 'loading':
                return navigate(loadingPair.route);
            case 'accessIsAllowed':
                return redirectTo();
            case 'accessIsNotAllowed':
                return redirectTo();
            default:
                return navigate(loadingPair.route);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authenticationState, firebaseAuthenticationState]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Routes, null,
            React.createElement(Route, { index: true, element: loadingPair.component }),
            React.createElement(Route, { path: loadingPair.route, index: true, element: loadingPair.component }),
            React.createElement(Route, { path: authPair.route, element: React.createElement(Wrapper, null, authPair.component) }),
            React.createElement(Route, { path: createUser.route, element: React.createElement(Wrapper, null, createUser.component) })),
        app.component));
}
//# sourceMappingURL=Authenticate.js.map