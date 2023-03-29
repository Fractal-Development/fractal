import { ImageSourcePropType } from '@fractal-software/fractal-ui';
import { useEffect, useRef, useState } from 'react';
import { Image, ImageURISource } from 'react-native';
import { Dimensions } from '../types';

import { createCache } from '../utils';

const CACHE_SIZE = 50;
const imageDimensionsCache = createCache(CACHE_SIZE);

export function useImageDimensions(image: ImageSourcePropType): Dimensions | null {
    const [dimensions, setDimensions] = useState<Dimensions | null>(null);

    const getImageDimensions = (image: ImageSourcePropType): Promise<Dimensions> => {
        return new Promise((resolve) => {
            if (typeof image == 'number') {
                const cacheKey = `${image}`;
                let imageDimensions = imageDimensionsCache.get(cacheKey);

                if (!imageDimensions) {
                    const { width, height } = Image.resolveAssetSource(image);
                    imageDimensions = { width, height };
                    imageDimensionsCache.set(cacheKey, imageDimensions);
                }

                resolve(imageDimensions);

                return;
            }

            if (typeof image == 'string') {
                const source = { uri: image } as ImageURISource;

                const cacheKey = source.uri as string;

                const imageDimensions = imageDimensionsCache.get(cacheKey);

                if (imageDimensions) {
                    resolve(imageDimensions);
                } else {
                    Image.getSizeWithHeaders(
                        source.uri as string,
                        source.headers as { [key: string]: string },
                        (width: number, height: number) => {
                            imageDimensionsCache.set(cacheKey, { width, height });
                            resolve({ width, height });
                        },
                        () => {
                            resolve({ width: 0, height: 0 });
                        }
                    );
                }
            } else {
                resolve({ width: 0, height: 0 });
            }
        });
    };

    const isImageUnmounted = useRef(false);

    useEffect(() => {
        getImageDimensions(image).then((dimensions) => {
            if (!isImageUnmounted.current) {
                setDimensions(dimensions);
            }
        });

        return () => {
            isImageUnmounted.current = true;
        };
    }, [image]);

    return dimensions;
}
