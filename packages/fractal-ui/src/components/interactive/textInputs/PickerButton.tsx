import React, { forwardRef } from 'react';

import { ChevronDownIcon } from '../../../assets';
import { useTheme } from '../../../context';
import { TextFieldButton, TextFieldButtonProps } from './TextFieldButton';

export interface PickerButtonProps extends Omit<TextFieldButtonProps, 'rightImage'> {
    rightImage?: (color: string, size: number) => JSX.Element;
}

const PickerButton = forwardRef(({ rightImage, ...others }: PickerButtonProps, ref: any): JSX.Element => {
    const { colors } = useTheme();

    return (
        <TextFieldButton
            ref={ref}
            rightImage={rightImage ? rightImage(colors.placeholder, 21) : <ChevronDownIcon width={21} fill={colors.placeholder} />}
            {...others}
        />
    );
});

PickerButton.displayName = 'PickerButton';

export { PickerButton };
