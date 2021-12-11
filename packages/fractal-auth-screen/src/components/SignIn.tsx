import React, { useCallback, useState } from 'react';
import { Button, IconTextField, Separator, TextButton, useTheme } from '@bma98/fractal-ui';
import { renderLockIcon, renderEmailIcon } from './util';
import { SignInProps } from './types';

const textFieldProps = {
    secureTextEntry: true
};

export function SignIn({
    emailPlaceholder,
    passwordPlaceholder,
    onPasswordResetButtonPress,
    signInText,
    signUpText,
    forgotPasswordText,
    onSignUpButtonPress,
    signIn,
    removeSignUpButton
}: SignInProps): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const toggleLoading = useCallback(() => setLoading((currentValue) => !currentValue), []);
    const { spacings } = useTheme();

    const handleEmailSignIn = async () => {
        if (email !== '' && password !== '') {
            toggleLoading();
            try {
                await signIn(email, password);
            } catch (error) {
                alert(error.message);
                toggleLoading();
            }
        }
    };

    return (
        <>
            <IconTextField
                value={email}
                onChangeText={setEmail}
                placeholder={emailPlaceholder}
                leftImage={renderEmailIcon}
                marginBottom={spacings.m}
            />
            <IconTextField
                value={password}
                onChangeText={setPassword}
                placeholder={passwordPlaceholder}
                leftImage={renderLockIcon}
                marginBottom={spacings.m}
                textFieldProps={textFieldProps}
            />
            <Button loading={loading} text={signInText} variant="main" marginBottom={spacings.m} onPress={handleEmailSignIn} />
            <TextButton onPress={onPasswordResetButtonPress} alignSelf="center" variant="main" marginBottom={spacings.m}>
                {forgotPasswordText}
            </TextButton>
            {!removeSignUpButton && (
                <>
                    <Separator marginBottom={spacings.m} />
                    <Button text={signUpText} variant="alternative" onPress={onSignUpButtonPress} />
                </>
            )}
        </>
    );
}
