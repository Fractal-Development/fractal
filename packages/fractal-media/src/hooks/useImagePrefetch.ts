import { ImageSourcePropType } from '@fractal/fractal-ui';
import { useEffect } from 'react';
import { Image } from 'react-native';

const useImagePrefetch = (images: ImageSourcePropType[]) => {
    useEffect(() => {
        images.forEach((image) => {
            if (typeof image === 'string') {
                return Image.prefetch(image);
            }
            return undefined;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useImagePrefetch;
