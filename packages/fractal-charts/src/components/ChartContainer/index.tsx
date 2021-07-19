import React, { useRef, useCallback, useEffect } from 'react';
import { Layer } from '@bma98/fractal-ui';
import { ChartContainerProps } from '../../types';

export function ChartContainer({
    style,
    contentStyle,
    onChangeDimensions,
    rotate,
    children,
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
                handleDimensions({ width, height });
            });

            observerRef.current.observe(resizedContainerRef.current);
        }

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    return (
        <Layer position={'relative'} zIndex={0} ref={resizedContainerRef} style={style} {...layerProps}>
            <Layer position={'relative'} zIndex={0} animate={{ rotate: rotate }} style={{ flex: 1, ...contentStyle }}>
                {children}
            </Layer>
        </Layer>
    );
}
