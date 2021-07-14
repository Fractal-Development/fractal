import textMetrics from 'text-metrics';

export function useGetTextHeight(containerWidth: number): (text: string) => number {
    const metrics = textMetrics.init({
        fontSize: '17px',
        lineHeight: '20px',
        fontFamily: 'system-ui',
        fontWeight: 400,
        width: containerWidth
    });

    return (text: string) => {
        return metrics.height(text);
    };
}
