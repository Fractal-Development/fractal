import { useCallback } from 'react';
import textMetrics from 'text-metrics';

export function useGetTextHeight(containerWidth: number): (text: string) => number {
    return useCallback(
        (text: string) => {
            const metrics = textMetrics.init({
                fontSize: '17px',
                lineHeight: '20px',
                fontFamily: 'system-ui',
                fontWeight: 400,
                width: containerWidth
            });

            return metrics.height(text);
        },
        [containerWidth]
    );
}
