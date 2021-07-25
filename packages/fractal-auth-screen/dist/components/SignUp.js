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
import { Button, Text, TouchableOpacity, IconTextField, Separator, useTheme, HorizontalLayer } from '@bma98/fractal-ui';
import { renderEmailIcon } from './util/renderEmailIcon';
import { renderLockIcon } from './util/renderLockIcon';
const textFieldProps = {
    secureTextEntry: true
};
export function SignUp({ emailPlaceholder, passwordPlaceholder, signInText, signUpText, byAcceptingTerms, termsAndConditions, and, privacyPolicy, onTermsButtonPressed, onPrivacyButtonPressed, signUp, onSignInButtonPress }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const toggleLoading = useCallback(() => setLoading((currentValue) => !currentValue), []);
    const { colors, spacings } = useTheme();
    const handleEmailSignUp = () => __awaiter(this, void 0, void 0, function* () {
        if (email !== '' && password !== '') {
            toggleLoading();
            try {
                yield signUp(email, password);
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
        React.createElement(Button, { loading: loading, text: signUpText, variant: 'main', marginBottom: spacings.m, onPress: handleEmailSignUp }),
        React.createElement(Text, { marginBottom: spacings.m, variant: 'label', alignSelf: 'center' }, `${byAcceptingTerms}`),
        React.createElement(HorizontalLayer, { marginBottom: spacings.m, justifyContent: 'center' },
            React.createElement(TouchableOpacity, { onPress: onTermsButtonPressed, marginRight: 4 },
                React.createElement(Text, { style: { color: colors.mainInteractiveColor } }, termsAndConditions)),
            React.createElement(Text, { variant: 'label', marginRight: 4 }, and),
            React.createElement(TouchableOpacity, { onPress: onPrivacyButtonPressed },
                React.createElement(Text, { style: { color: colors.mainInteractiveColor } }, privacyPolicy))),
        React.createElement(Separator, { marginBottom: spacings.m }),
        React.createElement(Button, { text: signInText, variant: 'alternative', onPress: onSignInButtonPress })));
}
//# sourceMappingURL=SignUp.js.map