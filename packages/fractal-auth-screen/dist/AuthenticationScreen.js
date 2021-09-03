var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useState } from 'react';
import { Background, Box, ErrorMessage, Layer, PaddingLayer, SocialMediaButtons, ScrollView, SafeAreaLayer, useTheme } from '@bma98/fractal-ui';
import { SignUp, SignIn, PasswordReset, scheduleAnimation } from './components';
export function AuthenticationScreen(_a) {
    var { logo, background, removeAppleButton = true, handleGoogleSignIn, handleFacebookSignIn, handleAppleSignIn, removeSocialMediaButtons } = _a, others = __rest(_a, ["logo", "background", "removeAppleButton", "handleGoogleSignIn", "handleFacebookSignIn", "handleAppleSignIn", "removeSocialMediaButtons"]);
    const [state, setState] = useState('signIn');
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
    const handleGoogleButtonPress = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        setGoogleLoading(true);
        try {
            yield (handleGoogleSignIn === null || handleGoogleSignIn === void 0 ? void 0 : handleGoogleSignIn());
        }
        catch (error) {
            console.log(error.message);
            setGoogleLoading(false);
        }
    }), [handleGoogleSignIn]);
    const handleFacebookButtonPress = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        setFacebookLoading(true);
        try {
            yield (handleFacebookSignIn === null || handleFacebookSignIn === void 0 ? void 0 : handleFacebookSignIn());
        }
        catch (error) {
            console.log(error.message);
            setFacebookLoading(false);
        }
    }), [handleFacebookSignIn]);
    const handleAppleButtonPress = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        setAppleLoading(true);
        try {
            yield (handleAppleSignIn === null || handleAppleSignIn === void 0 ? void 0 : handleAppleSignIn());
        }
        catch (error) {
            console.log(error.message);
            setAppleLoading(false);
        }
    }), [handleAppleSignIn]);
    return (React.createElement(Background, null,
        background,
        React.createElement(ScrollView, null,
            React.createElement(Layer, { alignItems: 'center' },
                React.createElement(SafeAreaLayer, null),
                React.createElement(Layer, { flex: 1, maxWidth: 600, alignItems: 'center', width: '100%' },
                    logo,
                    React.createElement(PaddingLayer, { width: '100%' },
                        React.createElement(Box, { marginBottom: spacings.m },
                            React.createElement(ErrorMessage, null, state === 'signIn' ? (React.createElement(SignIn, Object.assign({}, others, { onPasswordResetButtonPress: handlePasswordResetButtonPress, onSignUpButtonPress: toggleState }))) : state === 'signUp' ? (React.createElement(SignUp, Object.assign({}, others, { onSignInButtonPress: toggleState }))) : (React.createElement(PasswordReset, Object.assign({}, others, { onSignInButtonPress: toggleState }))))),
                        !removeSocialMediaButtons && (React.createElement(SocialMediaButtons, { width: '100%', onApplePress: handleAppleButtonPress, onGooglePress: handleGoogleButtonPress, onFacebookPress: handleFacebookButtonPress, googleLoading: googleLoading, appleLoading: appleLoading, facebookLoading: facebookLoading, removeAppleButton: removeAppleButton }))))))));
}
//# sourceMappingURL=AuthenticationScreen.js.map