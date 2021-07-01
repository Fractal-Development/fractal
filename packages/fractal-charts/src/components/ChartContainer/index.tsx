import React, { useRef, useCallback } from 'react';
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

    const observerRef = useRef(
        new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            handleDimensions({ width, height });
        })
    );

    const resizedContainerRef = useCallback((container: HTMLDivElement) => {
        if (container !== null) {
            observerRef.current.observe(container);
        }
        // When element is unmounted, ref callback is called with a null argument
        // => best time to cleanup the observer
        else {
            if (observerRef.current) observerRef.current.disconnect();
        }
    }, []);

    return (
        <Layer position={'relative'} zIndex={0} ref={resizedContainerRef} style={style} {...layerProps}>
            <Layer position={'relative'} zIndex={0} animate={{ rotate: rotate }} style={{ flex: 1, ...contentStyle }}>
                {children}
            </Layer>
        </Layer>
    );
}
