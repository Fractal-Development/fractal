import textMetrics from 'text-metrics';
export function useGetTextHeight(containerWidth) {
    const metrics = textMetrics.init({
        fontSize: '17px',
        lineHeight: '20px',
        fontFamily: 'system-ui',
        fontWeight: 400,
        width: containerWidth
    });
    return (text) => {
        return metrics.height(text);
    };
}
//# sourceMappingURL=index.js.map