import React from 'react';
import { Button } from '../../interactive/buttons/Button';
import { Box } from '../../layout/Box';
import { AlertButton } from '../alert/types';
import { DimmedModal } from '../modals/DimmedModal';
import { Text } from '../../text/Text';
import { PaddingLayer } from '../../layout/PaddingLayer';
import { HorizontalLayer } from '../../layout/HorizontalLayer';

interface AlertModalProps {
    visible: boolean;
    onDismiss: () => void;
    title?: string;
    message?: string;
    buttons?: AlertButton[];
}

export function AlertModal({
    visible,
    onDismiss,
    title,
    message,
    buttons = [{ text: 'Ok', style: 'default', onPress: () => {} }]
}: AlertModalProps) {
    const validButtons = buttons.splice(0, 3).reverse();
    const [firstButton, secondButton, thirdButton] = validButtons;
    const getButtonVariantForAlertButtonStyle = (style: AlertButton['style']): 'main' | 'danger' | 'content' => {
        switch (style) {
            case 'cancel':
                return 'content';

            case 'destructive':
                return 'danger';

            default:
                return 'main';
        }
    };

    const handleButtonPress = (button: AlertButton): (() => void) => {
        return () => {
            onDismiss();
            button.onPress?.();
        };
    };

    return (
        <DimmedModal visible={visible} onDismiss={onDismiss}>
            <PaddingLayer marginTop={48} alignItems='center'>
                <Box maxWidth={448} style={{ width: '100%' }}>
                    <Text fontWeight='bold' marginBottom={8}>
                        {title}
                    </Text>
                    <Text marginBottom={16}>{message}</Text>
                    <HorizontalLayer justifyContent={thirdButton != null ? 'space-between' : 'flex-end'}>
                        {thirdButton != null ? (
                            <Button
                                text={thirdButton.text}
                                onPress={handleButtonPress(thirdButton)}
                                variant={getButtonVariantForAlertButtonStyle(thirdButton.style)}
                            />
                        ) : null}
                        <HorizontalLayer alignItems='center'>
                            {secondButton != null ? (
                                <Button
                                    text={secondButton.text}
                                    onPress={handleButtonPress(secondButton)}
                                    variant={getButtonVariantForAlertButtonStyle(secondButton.style)}
                                    marginRight={8}
                                />
                            ) : null}
                            <Button
                                text={firstButton?.text}
                                onPress={handleButtonPress(firstButton)}
                                variant={getButtonVariantForAlertButtonStyle(firstButton?.style)}
                            />
                        </HorizontalLayer>
                    </HorizontalLayer>
                </Box>
            </PaddingLayer>
        </DimmedModal>
    );
}
