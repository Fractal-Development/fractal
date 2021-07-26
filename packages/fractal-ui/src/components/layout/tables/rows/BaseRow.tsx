import React, { forwardRef, memo } from 'react';
import { LayerProps } from '../../Layer/types';
import { Separator } from '../../Separator';
import { useTheme } from '../../../../context';
import { Layer } from '../../Layer';

export interface BaseRowProps extends LayerProps {
    addSeparator?: boolean;
    disablePadding?: boolean;
}

const BaseRow = forwardRef(({ addSeparator = false, disablePadding = false, children, ...others }: BaseRowProps, ref: any): JSX.Element => {
    const { spacings } = useTheme();
    return (
        <Layer paddingTop={disablePadding ? undefined : spacings.s} ref={ref} {...others}>
            {children}
            {addSeparator ? <Separator marginTop={disablePadding ? undefined : spacings.s} /> : null}
        </Layer>
    );
});

BaseRow.displayName = 'BaseRow';

const MemoizedBaseRow = memo(BaseRow);
MemoizedBaseRow.displayName = 'MemoizedBaseRow';

export { BaseRow, MemoizedBaseRow };
