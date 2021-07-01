export declare function useSegmentManager(numberOfValues: number, selectedIndex: number, tintColor: string): {
    segmentWidth: number;
    handleLayout: (event: {
        nativeEvent: {
            layout: {
                width: number;
            };
        };
    }) => void;
    sliderStyle: Record<string, unknown>;
};
