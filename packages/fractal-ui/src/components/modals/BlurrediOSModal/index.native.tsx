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
import { BlurredModalProps } from './types';
import { Dimensions } from 'react-native';

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
            pointerEvents={'box-none'}
            height={'100%'}
            width={'100%'}
            justifyContent={'flex-end'}
            {...others}
        >
            <Pressable flex={1} onPress={onDismiss} />
            <Layer
                height={'35%'}
                transition={{ type: 'ease', duration: 350 }}
                initial={{ translateY: modalContentHeight }}
                animate={{ translateY: 0 }}
                exit={{ translateY: modalContentHeight }}
            >
                <StyledBlurView intensity={100} tint={themeIdentifier}>
                    <Layer
                        top={0}
                        bottom={0}
                        left={0}
                        right={0}
                        position={'absolute'}
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
                        <TextButton variant={'main'} textProps={{ variant: 'label', fontWeight: 600 }} onPress={onDismiss}>
                            {dismissText}
                        </TextButton>
                    </Layer>
                    <SafeAreaLayer justifyContent='center'>{children}</SafeAreaLayer>
                </StyledBlurView>
            </Layer>
        </Modal>
    );
});

BlurrediOSModal.displayName = 'BlurrediOSModal';

export { BlurrediOSModal };
