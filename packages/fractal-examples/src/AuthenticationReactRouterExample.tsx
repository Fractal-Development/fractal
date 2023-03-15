import React, { useCallback, useMemo } from 'react';
import { AuthenticationScreen } from '@fractal/fractal-auth-screen';
import {
    CreateUserScreen,
    FirebaseInit,
    FirebaseAuthRoot,
    signIn,
    signUp,
    resetPassword,
    useUserDocument,
    useAuthenticationState,
    signOut,
    useSubscribeForFirebaseAuthenticationState,
    useSubscribeForUserDocumentState,
    googleSignInWithPopup,
    facebookSignInWithPopup,
    useFirebaseAuthenticationState
} from '@fractal/fractal-firebase-auth';
import { Collection, Database, IDEnabled } from '@fractal/firebase-db-manager';
import { LoadingBackground, PaddingLayer, Text, Image, Button, FractalAppRoot, Background, Box, SafeAreaLayer } from '@fractal/fractal-ui';
import { Navigate, NavigationRouter, Outlet, Route, Routes, useNavigate } from '@fractal/fractal-navigation-router';

interface User extends IDEnabled {
    email: string;
}

type UserCollection = Collection<User, null>;
type DatabaseType = Database<{
    users: UserCollection;
}>;

function createDatabase(): DatabaseType {
    return new Database({
        users: new Collection<User, null>('Users', null)
    });
}

function Home() {
    const { loading, firebaseUser } = useAuthenticationState();
    const currentUser = useUserDocument<User, null>();
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate('profile');
    };

    return (
        <SafeAreaLayer>
            <PaddingLayer>
                <Box>
                    <Text marginBottom={12}>{`Logged In! ${currentUser?.data?.email}`}</Text>
                    {!loading && firebaseUser != null ? (
                        <Text marginBottom={12}>{`Firebase user uid: ${firebaseUser.uid}`}</Text>
                    ) : (
                        <Text marginBottom={12}>Still getting the user</Text>
                    )}
                    <Button marginBottom={12} text='Sign Out' onPress={signOut} />
                    <Button marginBottom={12} text='Go To Profile' onPress={goToProfile} />
                </Box>
            </PaddingLayer>
        </SafeAreaLayer>
    );
}

function UserProfile() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <SafeAreaLayer>
            <PaddingLayer>
                <Text marginBottom={12}>User Profile</Text>
                <Button text='Back' onPress={goBack} />
            </PaddingLayer>
        </SafeAreaLayer>
    );
}

interface AppLayoutProps {
    database: DatabaseType;
}

function AppLayout({ database }: AppLayoutProps) {
    const firebaseAuthenticationState = useFirebaseAuthenticationState();
    const userDocumentState = useSubscribeForUserDocumentState(database);

    const createUser = useCallback(
        async (id: string, email: string) => {
            const newUser = {
                id,
                email
            };

            await database.collections.users.createDocument(newUser);
        },
        [database]
    );

    if (firebaseAuthenticationState === 'firebaseUserIsMissing') {
        return <Navigate to='/auth' replace />;
    }

    if (userDocumentState === 'firestoreUserDocumentIsMissing') {
        return <CreateUserScreen createUser={createUser} />;
    }
    if (userDocumentState === 'firestoreUserDocumentIsAvailable') {
        return (
            <Background>
                <Outlet />
            </Background>
        );
    }
    return <LoadingBackground />;
}

function AuthLayout() {
    const firebaseAuthenticationState = useFirebaseAuthenticationState();

    if (firebaseAuthenticationState === 'accessIsAllowed') {
        return <Navigate to='/app' replace />;
    }

    return <Outlet />;
}

function AuthSubscribe() {
    const firebaseAuthenticationState = useSubscribeForFirebaseAuthenticationState();

    if (firebaseAuthenticationState === 'loading') {
        return <LoadingBackground />;
    }
    return <Outlet />;
}

function ErrorPage() {
    return (
        <PaddingLayer>
            <Text>
                <Text>Oops!</Text>
                {'\n'}Page Not Found
            </Text>
        </PaddingLayer>
    );
}
// agregar ejemplo de layout para prevenir el
// agregar ejemplo de react navigation para nativo de como hacer auth

function Root(): JSX.Element {
    const database = useMemo(() => createDatabase(), []);

    return (
        <Routes>
            <Route element={<AuthSubscribe />}>
                <Route element={<AuthLayout />}>
                    <Route path='/' element={<Navigate to='/auth' replace />} />
                    <Route
                        path='/auth'
                        element={
                            <AuthenticationScreen
                                byAcceptingTerms='By creating an account you accept our '
                                termsAndConditions='Terms and Conditions '
                                and='and '
                                privacyPolicy='Privacy Policy'
                                resetPasswordText='Reset Password'
                                resetPasswordDescriptionText='Please check your email to finish the process.'
                                onTermsButtonPressed={() => console.log('Show terms and conditions')}
                                onPrivacyButtonPressed={() => console.log('Show privacy policy')}
                                logo={
                                    <Image
                                        source='https://picsum.photos/id/1039/200'
                                        style={{ height: 200, width: 200, borderRadius: 16, marginTop: 16 }}
                                    />
                                }
                                forgotPasswordText='Forgot your password?'
                                signInText='Sign In'
                                signUpText='Sign Up'
                                emailPlaceholder='Email'
                                passwordPlaceholder='Password'
                                signIn={signIn}
                                signUp={signUp}
                                resetPassword={resetPassword}
                                handleGoogleSignIn={async () => {
                                    await googleSignInWithPopup('359987729942-rqo24jpgn2ss16uu0v48cvvngcsl7k10.apps.googleusercontent.com');
                                }}
                                handleFacebookSignIn={async () => {
                                    facebookSignInWithPopup();
                                }}
                            />
                        }
                    />
                </Route>
                <Route path='/app' element={<AppLayout database={database} />}>
                    <Route index element={<Home />} />
                    <Route path='profile' element={<UserProfile />} />
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}

interface FirebaseConfig {
    [key: string]: string;
}

interface Props {
    firebaseConfig: FirebaseConfig;
}

export function AuthenticationReactRouterExample({ firebaseConfig }: Props): JSX.Element {
    return (
        <FractalAppRoot>
            <NavigationRouter>
                <FirebaseInit loadingComponent={<LoadingBackground />} firebaseConfig={firebaseConfig}>
                    <FirebaseAuthRoot>
                        <Root />
                    </FirebaseAuthRoot>
                </FirebaseInit>
            </NavigationRouter>
        </FractalAppRoot>
    );
}
