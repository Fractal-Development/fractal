import React, { forwardRef } from 'react';
import { Text } from '../../text';
import { BaseRow, BaseRowProps } from './BaseRow';

export interface SimpleRowProps extends BaseRowProps {
    title: string;
}

const SimpleRow = forwardRef(({ title, ...others }: SimpleRowProps, ref: any): JSX.Element => {
    return (
        <BaseRow ref={ref} {...others}>
            <Text variant='small'>{title}</Text>
        </BaseRow>
    );
});

SimpleRow.displayName = 'SimpleRow';

export { SimpleRow };
