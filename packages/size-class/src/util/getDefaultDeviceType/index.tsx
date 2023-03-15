import { DeviceType } from '../../types';
import UAParser from 'ua-parser-js';
import canUseDOM from '../canUseDom';

export function getDefaultDeviceType(): DeviceType {
    if (canUseDOM()) {
        const parser = new UAParser(window.navigator.userAgent);

        switch (parser.getResult().device.type) {
            case 'mobile':
                return DeviceType.PHONE;
            case 'tablet':
                return DeviceType.TABLET;
            case 'smarttv':
                return DeviceType.TV;
            case 'console':
            case 'embedded':
            case 'wearable':
                return DeviceType.UNKNOWN;
            default:
                return DeviceType.DESKTOP;
        }
    } else {
        return DeviceType.DESKTOP;
    }
}
