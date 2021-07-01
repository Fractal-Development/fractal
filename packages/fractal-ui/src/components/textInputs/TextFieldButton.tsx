import React, { forwardRef } from 'react';
import { Text } from '../text';
import { useTheme } from '../../context/hooks/useTheme';
import { TouchableOpacity } from '../buttons/TouchableOpacity';
import { TouchableOpacityProps } from '../buttons/TouchableOpacity/types';
import { Layer } from '../containers';

export interface TextFieldButtonProps extends Partial<Omit<TouchableOpacityProps, 'children'>> {
    value?: string;
    placeholder?: string;
    rightImage?: JSX.Element;
}

const TextFieldButton = forwardRef(({ value, placeholder, rightImage, ...others }: TextFieldButtonProps, ref: any): JSX.Element => {
    const { sizes, spacings, borderRadius, colors } = useTheme();

    return (
        <TouchableOpacity
            ref={ref}
            flexDirection='row'
            justifyContent='center'
            paddingLeft={spacings.s}
            paddingRight={spacings.s}
            borderRadius={borderRadius.s}
            height={sizes.textFieldHeight}
            backgroundColor={colors.textField}
            {...others}
        >
            <Layer flexGrow={1} height={'100%'} justifyContent={'center'}>
                <Text
                    variant={'normal'}
                    color={value == '' ? colors.placeholder : colors.text}
                    alignSelf={'flex-start'}
                    fontSize={14}
                    fontWeight={400}
                    numberOfLines={1}
                >
                    {value == '' ? placeholder : value}
                </Text>
            </Layer>
            {rightImage != null ? <Layer alignSelf='center'>{rightImage}</Layer> : null}
        </TouchableOpacity>
    );
});

TextFieldButton.displayName = 'TextFieldButton';

export { TextFieldButton };
