import React from 'react';
import { SafeAreaLayer, TouchableOpacity, Text } from '@fractal/fractal-ui';

type Props = {
    onRequestClose?: () => void;
};

export const ImageDefaultHeader = ({ onRequestClose }: Props) => (
    <SafeAreaLayer alignItems='flex-end'>
        <TouchableOpacity
            marginRight={8}
            marginTop={8}
            width={44}
            height={44}
            alignItems='center'
            justifyContent='center'
            borderRadius={22}
            backgroundColor='#00000077'
            onPress={onRequestClose}
        >
            <Text fontSize={19} textAlign='center' color='#FFF' style={{ lineHeight: 22 }}>
                ✕
            </Text>
        </TouchableOpacity>
    </SafeAreaLayer>
);
