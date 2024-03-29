import React, { useCallback, useState } from 'react';
import { Button, Message, IconTextField, Separator, TextButton, useTheme } from '@fractal-software/fractal-ui';
import { renderLockIcon, renderEmailIcon, scheduleAnimation } from './util';
import { PasswordResetProps } from './types';

export function PasswordReset({
    emailPlaceholder,
    resetPasswordText,
    resetPasswordDescriptionText,
    onSignInButtonPress,
    signInText,
    resetPassword
}: PasswordResetProps): JSX.Element {
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const toggleLoading = useCallback(() => setLoading((currentValue) => !currentValue), []);
    const { spacings } = useTheme();

    const handlePasswordReset = async () => {
        if (email !== '') {
            scheduleAnimation();
            toggleLoading();
            setShowMessage(true);
            try {
                await resetPassword(email);
                toggleLoading();
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
            {showMessage && !loading ? (
                <Message
                    icon={renderLockIcon}
                    messageType='success'
                    title={resetPasswordText}
                    description={resetPasswordDescriptionText}
                    marginBottom={spacings.m}
                />
            ) : null}
            <Button loading={loading} text={resetPasswordText} variant='warning' marginBottom={spacings.m} onPress={handlePasswordReset} />
            <Separator marginBottom={spacings.m} />
            <TextButton onPress={onSignInButtonPress} alignSelf='center' variant='main'>
                {signInText}
            </TextButton>
        </>
    );
}
