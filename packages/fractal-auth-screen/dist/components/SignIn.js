var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useCallback, useState } from 'react';
import { Button, IconTextField, Separator, TextButton, useTheme } from '@bma98/fractal-ui';
import { renderLockIcon, renderEmailIcon } from './util';
const textFieldProps = {
    secureTextEntry: true
};
export function SignIn({ emailPlaceholder, passwordPlaceholder, onPasswordResetButtonPress, signInText, signUpText, forgotPasswordText, onSignUpButtonPress, signIn, removeSignUpButton }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const toggleLoading = useCallback(() => setLoading((currentValue) => !currentValue), []);
    const { spacings } = useTheme();
    const handleEmailSignIn = () => __awaiter(this, void 0, void 0, function* () {
        if (email !== '' && password !== '') {
            toggleLoading();
            try {
                yield signIn(email, password);
            }
            catch (error) {
                alert(error.message);
                toggleLoading();
            }
        }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(IconTextField, { value: email, onChangeText: setEmail, placeholder: emailPlaceholder, leftImage: renderEmailIcon, marginBottom: spacings.m }),
        React.createElement(IconTextField, { value: password, onChangeText: setPassword, placeholder: passwordPlaceholder, leftImage: renderLockIcon, marginBottom: spacings.m, textFieldProps: textFieldProps }),
        React.createElement(Button, { loading: loading, text: signInText, variant: 'main', marginBottom: spacings.m, onPress: handleEmailSignIn }),
        React.createElement(TextButton, { onPress: onPasswordResetButtonPress, alignSelf: 'center', variant: 'main', marginBottom: spacings.m }, forgotPasswordText),
        !removeSignUpButton && (React.createElement(React.Fragment, null,
            React.createElement(Separator, { marginBottom: spacings.m }),
            React.createElement(Button, { text: signUpText, variant: 'alternative', onPress: onSignUpButtonPress })))));
}
//# sourceMappingURL=SignIn.js.map