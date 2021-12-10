import { useSizeValue } from '@bma98/size-class';
import { useCallback, useState } from 'react';
export function useGetContainerWidth(_) {
    const width = useSizeValue('width');
    const [containerWidth, setContainerWidth] = useState(width);
    const handleOnLayoutForContainer = useCallback((event) => {
        setContainerWidth(event.nativeEvent.layout.width);
    }, []);
    return [containerWidth, handleOnLayoutForContainer];
}
//# sourceMappingURL=index.native.js.map