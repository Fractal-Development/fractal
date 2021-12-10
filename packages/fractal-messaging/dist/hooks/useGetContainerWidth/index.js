import { useSizeValue } from '@bma98/size-class';
import { useEffect, useState } from 'react';
export function useGetContainerWidth(containerRef) {
    var _a;
    const width = useSizeValue('width');
    const [containerWidth, setContainerWidth] = useState(width);
    useEffect(() => {
        var _a, _b;
        if (((_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) != null) {
            setContainerWidth((_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth);
        }
    }, [(_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth, containerRef]);
    return [containerWidth, {}];
}
//# sourceMappingURL=index.js.map