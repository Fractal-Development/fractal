import { useCallback, useEffect, useState } from 'react';
import { DimensionsListenerParameter, DimensionType } from '../../types';
import { Dimensions } from 'react-native';

// This is not performant at all when it comes to sizes that change constantly
// On a real app though, it is not that common to change dimensions many times per second
// So you can use this hook freely
// Just be aware of not using it if resizing is too frequent.

export function useSizeValue(dimensionType: DimensionType): number {
    const [dimension, setDimension] = useState(Dimensions.get('window')[dimensionType] ?? 0);

    const onChange = useCallback(
        (dimensions: DimensionsListenerParameter) => {
            setDimension(dimensions.window[dimensionType]);
        },
        [dimensionType]
    );

    useEffect(() => {
        const listener = Dimensions.addEventListener('change', onChange);
        return () => {
            listener.remove();
        };
    }, [onChange]);

    return dimension;
}
