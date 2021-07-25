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
import { Button, Message, IconTextField, Separator, TextButton, useTheme } from '@bma98/fractal-ui';
import { LayoutAnimation } from 'react-native';
import { renderEmailIcon } from './util/renderEmailIcon';
import { renderLockIcon } from './util/renderLockIcon';
export function PasswordReset({ emailPlaceholder, resetPasswordText, resetPasswordDescriptionText, onSignInButtonPress, signInText, resetPassword }) {
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const toggleLoading = useCallback(() => setLoading((currentValue) => !currentValue), []);
    const { spacings } = useTheme();
    const handlePasswordReset = () => __awaiter(this, void 0, void 0, function* () {
        if (email !== '') {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            toggleLoading();
            setShowMessage(true);
            try {
                yield resetPassword(email);
            }
            catch (error) {
                alert(error.message);
                toggleLoading();
            }
        }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(IconTextField, { value: email, onChangeText: setEmail, placeholder: emailPlaceholder, leftImage: renderEmailIcon, marginBottom: spacings.m }),
        showMessage && !loading ? (React.createElement(Message, { icon: renderLockIcon, messageType: 'success', title: resetPasswordText, description: resetPasswordDescriptionText, marginBottom: spacings.m })) : null,
        React.createElement(Button, { loading: loading, text: resetPasswordText, variant: 'warning', marginBottom: spacings.m, onPress: handlePasswordReset }),
        React.createElement(Separator, { marginBottom: spacings.m }),
        React.createElement(TextButton, { onPress: onSignInButtonPress, alignSelf: 'center', variant: 'main' }, signInText)));
}
//# sourceMappingURL=PasswordReset.js.map