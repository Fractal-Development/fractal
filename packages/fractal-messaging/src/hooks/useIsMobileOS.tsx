import { useState } from 'react';

export function useIsMobileOS(): boolean {
    const getIfIsMobileOS = () => {
        if (typeof window !== 'undefined') {
            const userAgent = window.navigator.userAgent;
            const platform = window.navigator.platform;
            const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

            if (iosPlatforms.indexOf(platform) !== -1 || /Android/.test(userAgent)) {
                return true;
            }
        }

        return false;
    };
    const [isMobileOS] = useState<boolean>(getIfIsMobileOS());

    return isMobileOS;
}
