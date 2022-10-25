import React, { forwardRef } from 'react';

import { useTheme } from '../../../context';
import { Layer } from '../../layout';
import { Text } from '../../text';
import { TouchableOpacity, TouchableOpacityProps } from '../buttons';

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
            <Layer flexGrow={1} height='100%' justifyContent='center'>
                <Text
                    variant='normal'
                    color={value === '' ? colors.placeholder : colors.text}
                    alignSelf='flex-start'
                    fontSize={14}
                    fontWeight={400}
                    numberOfLines={1}
                >
                    {value === '' ? placeholder : value}
                </Text>
            </Layer>
            {rightImage != null ? <Layer alignSelf='center'>{rightImage}</Layer> : null}
        </TouchableOpacity>
    );
});

TextFieldButton.displayName = 'TextFieldButton';

export { TextFieldButton };
