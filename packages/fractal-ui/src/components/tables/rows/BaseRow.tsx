import React, { forwardRef, memo } from 'react';
import { LayerProps } from '../../containers/Layer/types';
import { Separator } from '../../Separator';
import { useTheme } from '../../../context';
import { Layer } from '../../containers';

export interface BaseRowProps extends LayerProps {
    addSeparator?: boolean;
}

const BaseRow = forwardRef(({ addSeparator = false, children, ...others }: BaseRowProps, ref: any): JSX.Element => {
    const { spacings } = useTheme();
    return (
        <Layer paddingTop={spacings.s} ref={ref} {...others}>
            {children}
            {addSeparator ? <Separator marginTop={spacings.s} /> : null}
        </Layer>
    );
});

BaseRow.displayName = 'BaseRow';

const MemoizedBaseRow = memo(BaseRow);
MemoizedBaseRow.displayName = 'MemoizedBaseRow';

export { BaseRow, MemoizedBaseRow };
