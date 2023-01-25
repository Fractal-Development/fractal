import {
    DimensionType,
    HeightSizeClass,
    WidthSizeClass,
    SizeGroup,
    SizeClass,
    MediaQuerySizeClass,
    SizeType,
    DeviceType
} from '../../types';
import { useDeviceType } from '../useDeviceType';
import { useCallback, useEffect, useMemo, useState } from 'react';

export function getWebMediaQueries(type: DeviceType, sizeClass: SizeClass, condition: string) {
    const queries: MediaQuerySizeClass = {};
    for (const key in sizeClass) {
        const value = sizeClass[key];
        const isCorrectQuery =
            (type === DeviceType.DESKTOP && key.includes('Desktop')) ||
            (type === DeviceType.TABLET && key.includes('Tablet')) ||
            (type === DeviceType.PHONE && key.includes('Phone'));
        if (isCorrectQuery) {
            const query = window.matchMedia(`(${condition}: ${value}px)`);
            queries[key] = query;
        }
    }
    return queries;
}

export function getWebDesktopSizeType(key: string, value: boolean): SizeType | undefined {
    if (key === 'extraLargeDesktop' && value) {
        return SizeType.extraLarge;
    } else if (key === 'largeDesktop' && value) {
        return SizeType.large;
    } else if (key === 'compactDesktop' && value) {
        return SizeType.medium;
    }

    return undefined;
}

export function getWebTabletSizeType(key: string, value: boolean): SizeType | undefined {
    if (key === 'extraLargeTablet' && value) {
        // Show a bigger iPad UI for the biggest one
        return SizeType.extraLarge;
    } else if (key === 'largeTablet' && value) {
        // Show the ideal iPad UI
        return SizeType.large;
    } else if (key === 'compactTablet' && value) {
        // Show a slightly reduced interface
        return SizeType.medium;
    }

    return undefined;
}

export function getWebPhoneSizeType(key: string, value: boolean): SizeType | undefined {
    if (key === 'largePhone' && value) {
        // Landscape, you can show more content
        return SizeType.medium;
    }

    return undefined;
}

export function getWebSizeType(type: DeviceType, key: string, value: boolean): SizeType | undefined {
    if (type === DeviceType.DESKTOP) {
        return getWebDesktopSizeType(key, value);
    } else if (type === DeviceType.TABLET) {
        return getWebTabletSizeType(key, value);
    } else {
        return getWebPhoneSizeType(key, value);
    }
}

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
