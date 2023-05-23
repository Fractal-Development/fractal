import React, { useCallback, useState } from 'react';

import { EyeIcon, HiddenEyeIcon } from '../../../assets';
import { TouchableOpacity } from '../buttons/TouchableOpacity';
import { IconTextField, IconTextFieldProps } from './IconTextField';

export function PasswordField({ textFieldProps, ...others }: IconTextFieldProps): JSX.Element {
    const [isPassword, setIsPassword] = useState(true);

    const changePasswordType = () => {
        setIsPassword((prevValue) => !prevValue);
    };

    const renderIcon = useCallback(
        (color: string, size: number) => (
            <TouchableOpacity onPress={changePasswordType}>
                {isPassword ? (
                    <EyeIcon height={size} width={size} stroke={color} />
                ) : (
                    <HiddenEyeIcon height={size} width={size} stroke={color} />
                )}
            </TouchableOpacity>
        ),
        [isPassword]
    );

    return <IconTextField textFieldProps={{ secureTextEntry: isPassword, ...textFieldProps }} rightImage={renderIcon} {...others} />;
}
