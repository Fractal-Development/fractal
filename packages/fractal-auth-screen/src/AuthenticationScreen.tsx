import React, { useCallback, useState } from 'react';
import {
    Background,
    Box,
    ErrorMessage,
    Layer,
    PaddingLayer,
    SocialMediaButtons,
    ScrollView,
    SafeAreaLayer,
    useTheme
} from '@bma98/fractal-ui';
import { AuthenticationScreenProps } from './components/types/AuthenticationScreenProps';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { PasswordReset } from './components/PasswordReset';
import { scheduleAnimation } from './components/util/scheduleAnimation';

type AuthenticationScreenState = 'signIn' | 'signUp' | 'passwordReset';

export function AuthenticationScreen({
    logo,
    background,
    removeAppleButton = true,
    handleGoogleSignIn,
    handleFacebookSignIn,
    handleAppleSignIn,
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
            console.log(error.message);
            setGoogleLoading(false);
        }
    }, [handleGoogleSignIn]);

    const handleFacebookButtonPress = useCallback(async () => {
        setFacebookLoading(true);
        try {
            await handleFacebookSignIn?.();
        } catch (error) {
            console.log(error.message);
            setFacebookLoading(false);
        }
    }, [handleFacebookSignIn]);

    const handleAppleButtonPress = useCallback(async () => {
        setAppleLoading(true);
        try {
            await handleAppleSignIn?.();
        } catch (error) {
            console.log(error.message);
            setAppleLoading(false);
        }
    }, [handleAppleSignIn]);

    return (
        <Background>
            {background}
            <ScrollView>
                <Layer alignItems={'center'}>
                    <SafeAreaLayer />
                    <Layer flex={1} maxWidth={600} alignItems={'center'} width={'100%'}>
                        {logo}
                        <PaddingLayer width={'100%'}>
                            <Box marginBottom={spacings.m}>
                                <ErrorMessage>
                                    {state === 'signIn' ? (
                                        <SignIn
                                            {...others}
                                            onPasswordResetButtonPress={handlePasswordResetButtonPress}
                                            onSignUpButtonPress={toggleState}
                                        />
                                    ) : state === 'signUp' ? (
                                        <SignUp {...others} onSignInButtonPress={toggleState} />
                                    ) : (
                                        <PasswordReset {...others} onSignInButtonPress={toggleState} />
                                    )}
                                </ErrorMessage>
                            </Box>
                            <SocialMediaButtons
                                width={'100%'}
                                onApplePress={handleAppleButtonPress}
                                onGooglePress={handleGoogleButtonPress}
                                onFacebookPress={handleFacebookButtonPress}
                                googleLoading={googleLoading}
                                appleLoading={appleLoading}
                                facebookLoading={facebookLoading}
                                removeAppleButton={removeAppleButton}
                            />
                        </PaddingLayer>
                    </Layer>
                </Layer>
            </ScrollView>
        </Background>
    );
}
