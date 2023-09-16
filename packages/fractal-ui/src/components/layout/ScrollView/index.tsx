import React from 'react';

import { Layer } from '../Layer';
import { ScrollViewProps } from './types';
import clsx from 'clsx';

export function ScrollView({
    horizontal,
    showsHorizontalScrollIndicator = true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nestedScrollEnabled,
    className,
    ...others
}: ScrollViewProps): JSX.Element {
    return (
        <Layer
            className={clsx(
                horizontal ? 'overflow-y-hidden overflow-x-scroll' : 'overflow-x-hidden overflow-y-scroll',
                horizontal && 'flex-row',
                showsHorizontalScrollIndicator ? '[&::-webkit-scrollbar]:[height:8px]' : '[&::-webkit-scrollbar]:[height:0px]',
                className
            )}
            {...others}
        />
    );
}
