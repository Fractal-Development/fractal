import { ImageSourcePropType } from '@fractal-software/fractal-ui';
import { useEffect, useRef } from 'react';
import { Image } from 'react-native';

export function useImagePrefetch(images: ImageSourcePropType[]) {
    const isMounted = useRef<boolean>(false);

    useEffect(() => {
        if (!isMounted.current) {
            images.forEach((image) => {
                if (typeof image === 'string') {
                    return Image.prefetch(image);
                }
                return undefined;
            });
        } else {
            isMounted.current = true;
        }
    }, [images]);
}
