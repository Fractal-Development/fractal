import React, { useCallback, useState } from 'react';
import {
    Background,
    Box,
    ErrorBoundaryMessage,
    Layer,
    PaddingLayer,
    SocialMediaButtons,
    ScrollView,
    SafeAreaLayer,
    useTheme
} from '@fractal-software/fractal-ui';
import { SignUp, SignIn, PasswordReset, scheduleAnimation, AuthenticationScreenProps } from './components';

type AuthenticationScreenState = 'signIn' | 'signUp' | 'passwordReset';

export function AuthenticationScreen({
    logo,
    background,
    removeAppleButton = true,
    handleGoogleSignIn,
    handleFacebookSignIn,
    handleAppleSignIn,
    removeSocialMediaButtons,
    removeSignUpButton,
    children,
    removeEmailFlow,
    ...others
}: AuthenticationScreenProps): JSX.Element {
    const [state, setState] = useState<AuthenticationScreenState>('signIn');
    const [googleLoading, setGoogleLoading] = useState(false);
    const [facebookLoading, setFacebookLoading] = useState(false);
    const [appleLoading, setAppleLoading] = useState(false);
    const { spacings } = useTheme();

    const toggleState = useCallback(() => {
        scheduleAnimation();
        setState((currentState) => (currentState === 'signIn' ? 'signUp' : 'signIn'));
    }, []);

    const handlePasswordResetButtonPress = useCallback(() => {
        scheduleAnimation();
        setState('passwordReset');
    }, []);

    const handleGoogleButtonPress = useCallback(async () => {
        setGoogleLoading(true);
        try {
            await handleGoogleSignIn?.();
        } catch (error) {
            console.error(error);
            setGoogleLoading(false);
        }
    }, [handleGoogleSignIn]);

    const handleFacebookButtonPress = useCallback(async () => {
        setFacebookLoading(true);
        try {
            await handleFacebookSignIn?.();
        } catch (error) {
            console.error(error);
            setFacebookLoading(false);
        }
    }, [handleFacebookSignIn]);

    const handleAppleButtonPress = useCallback(async () => {
        setAppleLoading(true);
        try {
            await handleAppleSignIn?.();
        } catch (error) {
            console.error(error);
            setAppleLoading(false);
        }
    }, [handleAppleSignIn]);

    return (
        <Background>
            {background}
            <ScrollView>
                <Layer alignItems='center'>
                    <SafeAreaLayer />
                    <Layer flex={1} maxWidth={600} alignItems='center' width='100%'>
                        {logo}
                        <PaddingLayer width='100%'>
                            {removeEmailFlow ? null : (
                                <Box marginBottom={spacings.m}>
                                    <ErrorBoundaryMessage>
                                        {state === 'signIn' ? (
                                            <SignIn
                                                {...others}
                                                removeSignUpButton={removeSignUpButton}
                                                onPasswordResetButtonPress={handlePasswordResetButtonPress}
                                                onSignUpButtonPress={toggleState}
                                            />
                                        ) : state === 'signUp' ? (
                                            <SignUp {...others} onSignInButtonPress={toggleState}>
                                                {children}
                                            </SignUp>
                                        ) : (
                                            <PasswordReset {...others} onSignInButtonPress={toggleState} />
                                        )}
                                    </ErrorBoundaryMessage>
                                </Box>
                            )}
                            {!removeSocialMediaButtons && (
                                <SocialMediaButtons
                                    width='100%'
                                    onApplePress={handleAppleButtonPress}
                                    onGooglePress={handleGoogleButtonPress}
                                    onFacebookPress={handleFacebookButtonPress}
                                    googleLoading={googleLoading}
                                    appleLoading={appleLoading}
                                    facebookLoading={facebookLoading}
                                    removeAppleButton={removeAppleButton}
                                />
                            )}
                        </PaddingLayer>
                    </Layer>
                </Layer>
            </ScrollView>
        </Background>
    );
}
