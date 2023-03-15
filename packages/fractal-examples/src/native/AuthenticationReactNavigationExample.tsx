import React, { useCallback, useMemo } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import {
    CreateUserScreen,
    facebookSignInWithPopup,
    FirebaseAuthRoot,
    FirebaseInit,
    googleSignInWithPopup,
    resetPassword,
    signIn,
    signOut,
    signUp,
    useAuthenticationState,
    useSubscribeForFirebaseAuthenticationState,
    useSubscribeForUserDocumentState,
    useUserDocument
} from '@fractal/fractal-firebase-auth';
import {
    LoadingBackground,
    FractalAppRoot,
    Image,
    PaddingLayer,
    SafeAreaLayer,
    Box,
    Text,
    Button,
    useThemeIdentifier
} from '@fractal/fractal-ui';
import { AuthenticationScreen } from '@fractal/fractal-auth-screen';
import { Collection, Database, IDEnabled } from '@fractal/firebase-db-manager';

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

type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({ navigation }: HomeProps) {
    const database = useMemo(() => createDatabase(), []);
    const { loading, firebaseUser } = useAuthenticationState();
    const currentUser = useUserDocument<User, null>();
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

    const goToProfile = () => {
        navigation.navigate('Profile');
    };

    if (userDocumentState === 'firestoreUserDocumentIsMissing') {
        return <CreateUserScreen createUser={createUser} />;
    } else if (userDocumentState === 'firestoreUserDocumentIsAvailable') {
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

    return <LoadingBackground />;
}

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

function UserProfile({ navigation }: ProfileProps) {
    const goBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaLayer>
            <PaddingLayer>
                <Box>
                    <Text marginBottom={12}>User Profile</Text>
                    <Button text='Back' onPress={goBack} />
                </Box>
            </PaddingLayer>
        </SafeAreaLayer>
    );
}

function Auth() {
    return (
        <AuthenticationScreen
            byAcceptingTerms='By creating an account you accept our '
            termsAndConditions='Terms and Conditions '
            and='and '
            privacyPolicy='Privacy Policy'
            resetPasswordText='Reset Password'
            resetPasswordDescriptionText='Please check your email to finish the process.'
            onTermsButtonPressed={() => console.log('Show terms and conditions')}
            onPrivacyButtonPressed={() => console.log('Show privacy policy')}
            logo={<Image source='https://picsum.photos/id/1039/200' style={{ height: 200, width: 200, borderRadius: 16, marginTop: 16 }} />}
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
    );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
    const themeIdentifier = useThemeIdentifier();
    const firebaseAuthenticationState = useSubscribeForFirebaseAuthenticationState();

    if (firebaseAuthenticationState === 'loading') {
        return <LoadingBackground />;
    }

    return (
        <NavigationContainer theme={themeIdentifier === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack.Navigator>
                {firebaseAuthenticationState === 'firebaseUserIsMissing' ? (
                    <Stack.Screen
                        name='Auth'
                        component={Auth}
                        options={{
                            headerShown: false,
                            animationTypeForReplace: firebaseAuthenticationState === 'firebaseUserIsMissing' ? 'pop' : 'push'
                        }}
                    />
                ) : (
                    <>
                        <Stack.Screen name='Home' component={Home} />
                        <Stack.Screen name='Profile' component={UserProfile} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

interface FirebaseConfig {
    [key: string]: string;
}

interface Props {
    firebaseConfig: FirebaseConfig;
}

export function AuthenticationReactNavigationExample({ firebaseConfig }: Props) {
    return (
        <FractalAppRoot>
            <FirebaseInit loadingComponent={<LoadingBackground />} firebaseConfig={firebaseConfig}>
                <FirebaseAuthRoot>
                    <RootNavigator />
                </FirebaseAuthRoot>
            </FirebaseInit>
        </FractalAppRoot>
    );
}
