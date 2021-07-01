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
import React, { forwardRef } from 'react';
import { BlurView } from 'expo-blur';
import { TextButton } from '../../buttons/TextButton';
import { useTheme } from '../../../context/hooks/useTheme';
import { Layer } from '../../containers/Layer';
import { Pressable } from '../../buttons/Pressable';
import { SafeAreaLayer } from '../../containers/SafeAreaLayer';
import { useThemeIdentifier } from '../../../context/hooks/useThemeIdentifier';
import { Modal } from '../Modal';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const StyledBlurView = styled(BlurView) `
    height: 100%;
`;
const BlurrediOSModal = forwardRef((_a, ref) => {
    var { children, onDismiss, dismissText, visible } = _a, others = __rest(_a, ["children", "onDismiss", "dismissText", "visible"]);
    const { colors, spacings } = useTheme();
    const themeIdentifier = useThemeIdentifier();
    const window = Dimensions.get('window');
    const modalContentHeight = (window.height * 35) / 100;
    return (React.createElement(Modal, Object.assign({ ref: ref, visible: visible, onDismiss: onDismiss, pointerEvents: 'box-none', height: '100%', width: '100%', justifyContent: 'flex-end' }, others),
        React.createElement(Pressable, { flex: 1, onPress: onDismiss }),
        React.createElement(Layer, { height: '35%', transition: { type: 'ease', duration: 350 }, initial: { translateY: modalContentHeight }, animate: { translateY: 0 }, exit: { translateY: modalContentHeight } },
            React.createElement(StyledBlurView, { intensity: 100, tint: themeIdentifier },
                React.createElement(Layer, { top: 0, bottom: 0, left: 0, right: 0, position: 'absolute', style: { opacity: 0.1 }, backgroundColor: themeIdentifier === 'light' ? 'black' : 'white' }),
                React.createElement(Layer, { justifyContent: 'center', alignItems: 'flex-end', borderTopWidth: 0.5, borderColor: colors.placeholder, backgroundColor: colors.background, height: 48, paddingRight: spacings.m },
                    React.createElement(TextButton, { variant: 'main', textProps: { variant: 'label', fontWeight: 600 }, onPress: onDismiss }, dismissText)),
                React.createElement(SafeAreaLayer, { justifyContent: 'center' }, children)))));
});
BlurrediOSModal.displayName = 'BlurrediOSModal';
export { BlurrediOSModal };
//# sourceMappingURL=index.native.js.map