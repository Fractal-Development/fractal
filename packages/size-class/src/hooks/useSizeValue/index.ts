import { useCallback, useEffect, useState } from 'react';
import { DimensionType } from '../../types';
import canUseDOM from '../../util/canUseDom';

// This is not performant at all when it comes to sizes that change constantly
// On a real app though, it is not that common to change dimensions many times per second
// So you can use this hook freely
// Just be aware of not using it if resizing is too frequent.

function capitalize(text): string {
    if (typeof text !== 'string') return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function useSizeValue(dimensionType: DimensionType): number {
    const propertyName = `inner${capitalize(dimensionType)}`;
    const [dimension, setDimension] = useState(canUseDOM() ? window[propertyName] ?? 0 : 0);

    const onChange = useCallback(
        (event) => {
            setDimension(event.target[propertyName]);
        },
        [propertyName]
    );

    useEffect(() => {
        window.addEventListener('resize', onChange);
        return () => {
            window.removeEventListener('resize', onChange);
        };
    }, [onChange]);

    return dimension;
}
