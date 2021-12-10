import { useCallback } from 'react';
import textMetrics from 'text-metrics';
export function useGetTextHeight(containerWidth) {
    return useCallback((text) => {
        const metrics = textMetrics.init({
            fontSize: '17px',
            lineHeight: '20px',
            fontFamily: 'system-ui',
            fontWeight: 400,
            width: containerWidth
        });
        return metrics.height(text);
    }, [containerWidth]);
}
//# sourceMappingURL=index.js.map