import { DeviceType, MediaQuerySizeClass, SizeClass } from '../../types';

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
