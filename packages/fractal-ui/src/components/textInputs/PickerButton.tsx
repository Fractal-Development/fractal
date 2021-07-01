import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { ChevronDownIcon } from '../../assets/ChevronDownIcon';
import { TextFieldButton, TextFieldButtonProps } from './TextFieldButton';

const PickerButton = forwardRef((props: Omit<TextFieldButtonProps, 'rightImage'>, ref: any): JSX.Element => {
    const { colors } = useTheme();

    return <TextFieldButton ref={ref} rightImage={<ChevronDownIcon width={21} fill={colors.placeholder} />} {...props} />;
});

PickerButton.displayName = 'PickerButton';

export { PickerButton };
