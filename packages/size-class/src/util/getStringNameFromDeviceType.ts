import { DeviceType } from '../types';

export function getStringNameFromDeviceType(type: DeviceType): 'unknown' | 'phone' | 'tablet' | 'desktop' | 'tv' {
    switch (type) {
        case 1:
            return 'phone';
        case 2:
            return 'tablet';
        case 3:
            return 'desktop';
        case 4:
            return 'tv';
        default:
            return 'unknown';
    }
}
