import { useSizeValue } from '@bma98/size-class';
import { MutableRefObject, useEffect, useState } from 'react';

export function useGetContainerWidth(containerRef: MutableRefObject<any>): [number, ((event) => void) | undefined] {
    const width = useSizeValue('width');
    const [containerWidth, setContainerWidth] = useState(width);

    useEffect(() => {
        if (containerRef.current?.clientWidth != null) {
            setContainerWidth(containerRef.current?.clientWidth);
        }
    }, [containerRef.current?.clientWidth, containerRef]);

    return [containerWidth, undefined];
}
