import React, { forwardRef } from 'react';
import { Layer } from '../../Layer';
import { Text } from '../../../text';
import { BaseRow, BaseRowProps } from './BaseRow';
import { HorizontalLayer } from '../../HorizontalLayer';

export interface DetailsRowProps extends BaseRowProps {
    title: string;
    details: string;
}

const DetailsRow = forwardRef(({ title, details, ...others }: DetailsRowProps, ref: any): JSX.Element => {
    return (
        <BaseRow ref={ref} {...others}>
            <HorizontalLayer>
                <Layer flexGrow={1}>
                    <Text variant='small'>{title}</Text>
                </Layer>
                <Text variant='label' maxWidth={150} ellipsizeMode='clip' numberOfLines={1}>
                    {details}
                </Text>
            </HorizontalLayer>
        </BaseRow>
    );
});

DetailsRow.displayName = 'DetailsRow';

export { DetailsRow };
