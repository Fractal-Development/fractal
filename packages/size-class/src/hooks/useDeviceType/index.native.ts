import { DeviceType, getDeviceTypeAsync } from 'expo-device';
import { useLayoutEffect, useState } from 'react';
import { getDefaultDeviceType } from '../../util/getDefaultDeviceType';

export function useDeviceType(): DeviceType {
    const [type, setType] = useState<DeviceType>(getDefaultDeviceType());

    useLayoutEffect(() => {
        getDeviceTypeAsync()
            .then((type) => {
                return setType(type);
            })
            .catch((error) => {
                alert(error.message);
            });
    }, []);

    return type;
}
