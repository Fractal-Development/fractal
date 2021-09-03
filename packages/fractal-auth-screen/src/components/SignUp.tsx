import React, { useCallback, useState } from 'react';
import { Button, Text, TouchableOpacity, IconTextField, Separator, useTheme, HorizontalLayer } from '@bma98/fractal-ui';
import { renderEmailIcon, renderLockIcon } from './util';
import { SignUpProps } from './types';

const textFieldProps = {
    secureTextEntry: true
};

export function SignUp({
    emailPlaceholder,
    passwordPlaceholder,
    signInText,
    signUpText,
    byAcceptingTerms,
    termsAndConditions,
    and,
    privacyPolicy,
    onTermsButtonPressed,
    onPrivacyButtonPressed,
    signUp,
    onSignInButtonPress
}: SignUpProps): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const toggleLoading = useCallback(() => setLoading((currentValue) => !currentValue), []);
    const { colors, spacings } = useTheme();

    const handleEmailSignUp = async () => {
        if (email !== '' && password !== '') {
            toggleLoading();
            try {
                await signUp(email, password);
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
            <Button loading={loading} text={signUpText} variant={'main'} marginBottom={spacings.m} onPress={handleEmailSignUp} />
            <Text marginBottom={spacings.m} variant={'label'} alignSelf={'center'}>
                {`${byAcceptingTerms}`}
            </Text>
            <HorizontalLayer marginBottom={spacings.m} justifyContent={'center'}>
                <TouchableOpacity onPress={onTermsButtonPressed} marginRight={4}>
                    <Text style={{ color: colors.mainInteractiveColor }}>{termsAndConditions}</Text>
                </TouchableOpacity>
                <Text variant={'label'} marginRight={4}>
                    {and}
                </Text>
                <TouchableOpacity onPress={onPrivacyButtonPressed}>
                    <Text style={{ color: colors.mainInteractiveColor }}>{privacyPolicy}</Text>
                </TouchableOpacity>
            </HorizontalLayer>
            <Separator marginBottom={spacings.m} />
            <Button text={signInText} variant={'alternative'} onPress={onSignInButtonPress} />
        </>
    );
}
