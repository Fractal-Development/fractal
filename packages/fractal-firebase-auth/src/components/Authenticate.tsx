import React, { ReactElement, useEffect } from 'react';
import { Routes, Route, useNavigate } from '@bma98/fractal-navigation-router';
import { MinimalExpectedDatabase, MinimalUserData } from '../types';
import { useAuthenticateChildren, useSubscribeForAuthenticatedUser, useSubscribeForUserDocument, useUserDocument } from '../hooks';
import { ComponentRouteProps } from '../types/ComponentRouteProps';

export interface AuthenticateProps<UserType extends MinimalUserData> {
    database: MinimalExpectedDatabase<UserType, unknown>;
    children: Array<ReactElement<ComponentRouteProps>>;
    WrapperComponent?: React.FC;
}

type FirebaseAuthenticationState = 'loading' | 'accessIsAllowed' | 'firebaseUserIsMissing' | 'firestoreUserDocumentIsMissing';

export function Authenticate<UserType extends MinimalUserData>({
    database,
    children,
    WrapperComponent
}: AuthenticateProps<UserType>): ReactElement {
    const [app, loadingPair, authPair, createUser] = useAuthenticateChildren(children);
    const navigate = useNavigate();
    const { firebaseUser, loading } = useSubscribeForAuthenticatedUser();
    const isLoadingUserDocument = useSubscribeForUserDocument(firebaseUser, database);
    const userDocument = useUserDocument();
    const Wrapper = WrapperComponent ?? React.Fragment;

    const isLoadingFirebaseUser = firebaseUser === undefined && loading;
    const isFirebaseUserMissing = firebaseUser === null && !loading;
    const isUserDocumentMissing = userDocument == null;

    const firebaseAuthenticationState: FirebaseAuthenticationState = (() => {
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

    return (
        <>
            <Routes>
                <Route index element={loadingPair.component} />
                <Route path={loadingPair.route} index element={loadingPair.component} />
                <Route path={authPair.route} element={<Wrapper>{authPair.component}</Wrapper>} />
                <Route path={createUser.route} element={<Wrapper>{createUser.component}</Wrapper>} />
            </Routes>
            {app.component}
        </>
    );
}
