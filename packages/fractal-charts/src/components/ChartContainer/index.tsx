import React, { useRef, useCallback, useEffect } from 'react';
import { Layer } from '@fractal/fractal-ui';
import { ChartContainerProps } from '../../types';

export function ChartContainer({
    style,
    contentStyle,
    onChangeDimensions,
    rotate,
    children,
    height,
    ...layerProps
}: ChartContainerProps): JSX.Element {
    const handleDimensions = useCallback(
        (dimensions) => {
            onChangeDimensions(dimensions);
        },
        [onChangeDimensions]
    );

    const observerRef = useRef<ResizeObserver | null>(null);
    const resizedContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (resizedContainerRef.current) {
            observerRef.current = new ResizeObserver((entries) => {
                // Only care about the first element, we expect one element ot be watched
                const { width, height } = entries[0].contentRect;
                if (height > 0) {
                    handleDimensions({ width, height });
                }
            });

            observerRef.current.observe(resizedContainerRef.current);
        }

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, [handleDimensions]);

    useEffect(() => {
        if (resizedContainerRef.current) {
            const width = resizedContainerRef.current.offsetWidth;
            handleDimensions({ width, height });
        }
    }, [handleDimensions, height]);

    return (
        <Layer position='relative' zIndex={0} ref={resizedContainerRef} style={style} height={height} {...layerProps}>
            <Layer position='relative' zIndex={0} animate={{ rotate }} style={{ flex: 1, ...contentStyle }}>
                {children}
            </Layer>
        </Layer>
    );
}
