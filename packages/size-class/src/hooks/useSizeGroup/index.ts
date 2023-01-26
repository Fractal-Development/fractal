import { DimensionType, HeightSizeClass, WidthSizeClass, SizeGroup, SizeType } from '../../types';
import { useDeviceType } from '../useDeviceType';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getWebMediaQueries, getWebSizeType } from '../../util/web';

export function useSizeGroup(dimensionType: DimensionType): SizeGroup {
    const deviceType = useDeviceType();
    const isWidthCondition = dimensionType === 'width';

    const queries = useMemo(() => {
        return getWebMediaQueries(
            deviceType,
            isWidthCondition ? WidthSizeClass : HeightSizeClass,
            isWidthCondition ? 'min-width' : 'min-height'
        );
    }, [isWidthCondition, deviceType]);

    const checkPossibleSizeTypes = useCallback(() => {
        let possibleType = SizeType.compact;
        for (const key in queries) {
            const query: MediaQueryList = queries[key];
            const type = getWebSizeType(deviceType, key, query.matches);
            if (type != null) {
                possibleType = type;
            }
        }
        return possibleType;
    }, [deviceType, queries]);

    const [sizeType, setSizeType] = useState<SizeType>(checkPossibleSizeTypes);

    useEffect(() => {
        const listeners = {};
        for (const key in queries) {
            const query: MediaQueryList = queries[key];
            const listener = () => {
                setSizeType(checkPossibleSizeTypes);
            };
            listeners[key] = listener;
            query.addEventListener('change', listener);
        }

        return () => {
            for (const key in queries) {
                const query: MediaQueryList = queries[key];
                const listener = listeners[key];
                query.removeEventListener('change', listener);
            }
        };
    }, [deviceType, dimensionType, queries, checkPossibleSizeTypes]);

    return [sizeType, deviceType, undefined];
}
