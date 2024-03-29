import React, { forwardRef } from 'react';

import { useTheme } from '../../../../context';
import { Check } from '../../../interactive/CheckBox/Check';
import { HorizontalLayer } from '../../HorizontalLayer';
import { BaseRow, BaseRowProps } from './BaseRow';

export interface CheckMarkRowProps extends BaseRowProps {
    title: string;
    isSelected: boolean;
}

const CheckMarkRow = forwardRef(({ title, isSelected, ...others }: CheckMarkRowProps, ref: any): JSX.Element => {
    const { spacings } = useTheme();
    return (
        <BaseRow ref={ref} {...others}>
            <HorizontalLayer alignItems='center' flex={1} marginRight={spacings.s}>
                <Check value={isSelected} label={title} />
            </HorizontalLayer>
        </BaseRow>
    );
});

CheckMarkRow.displayName = 'CheckMarkRow';

export { CheckMarkRow };
