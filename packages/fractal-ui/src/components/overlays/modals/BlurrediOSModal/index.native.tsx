import { motify } from 'moti';
import { BlurView } from 'expo-blur';
import React, { forwardRef } from 'react';
import { View, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { useTheme, useThemeIdentifier } from '../../../../context';
import { Pressable } from '../../../interactive/buttons/Pressable';
import { TextButton } from '../../../interactive/buttons/TextButton';
import { Layer, SafeAreaLayer } from '../../../layout';
import { Modal } from '../Modal';
import { BlurredModalProps } from './types';

const MotiView = motify(View)();

const StyledBlurView = styled(BlurView)`
    height: 100%;
` as typeof BlurView;

const BlurrediOSModal = forwardRef(({ children, onDismiss, dismissText, visible, ...others }: BlurredModalProps, ref: any): JSX.Element => {
    const { colors, spacings } = useTheme();
    const themeIdentifier = useThemeIdentifier();
    const window = Dimensions.get('window');
    const modalContentHeight = (window.height * 35) / 100;

    return (
        <Modal
            ref={ref}
            visible={visible}
            onDismiss={onDismiss}
            pointerEvents='box-none'
            height='100%'
            width='100%'
            justifyContent='flex-end'
            {...others}
        >
            <Pressable flex={1} onPress={onDismiss} />
            <MotiView
                style={{ height: '35%' }}
                transition={{
                    type: 'timing',
                    duration: 330
                }}
                from={{ translateY: modalContentHeight }}
                animate={{ translateY: 0 }}
                exit={{ translateY: modalContentHeight }}
                exitTransition={{ type: 'timing', duration: 360 }}
            >
                <StyledBlurView intensity={100} tint={themeIdentifier}>
                    <Layer
                        top={0}
                        bottom={0}
                        left={0}
                        right={0}
                        position='absolute'
                        style={{ opacity: 0.1 }}
                        backgroundColor={themeIdentifier === 'light' ? 'black' : 'white'}
                    />
                    <Layer
                        justifyContent='center'
                        alignItems='flex-end'
                        borderTopWidth={0.5}
                        borderColor={colors.placeholder}
                        backgroundColor={colors.background}
                        height={48}
                        paddingRight={spacings.m}
                    >
                        <TextButton variant='main' textProps={{ variant: 'label', fontWeight: 600 }} onPress={onDismiss}>
                            {dismissText}
                        </TextButton>
                    </Layer>
                    <SafeAreaLayer justifyContent='center'>{children}</SafeAreaLayer>
                </StyledBlurView>
            </MotiView>
        </Modal>
    );
});

BlurrediOSModal.displayName = 'BlurrediOSModal';

export { BlurrediOSModal };
