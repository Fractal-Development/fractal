import { useSizeValue } from '@fractal/size-class';
import { MutableRefObject, useEffect, useState } from 'react';

import { useIsMobileOS } from '../useIsMobileOS';

const SCROLLBAR_WIDTH = 8;

export function useGetContainerWidth(containerRef: MutableRefObject<any>): [number, object] {
    const width = useSizeValue('width');
    const [containerWidth, setContainerWidth] = useState(width);
    const isMobileOS = useIsMobileOS();

    useEffect(() => {
        if (containerRef.current != null && containerRef.current.clientWidth != null) {
            const scrollbarWidth = isMobileOS ? 0 : SCROLLBAR_WIDTH;
            setContainerWidth(containerRef.current.clientWidth - scrollbarWidth);
        }
    }, [containerRef, isMobileOS]);

    return [containerWidth, {}];
}
