interface ScaledSize {
    width: number;
    height: number;
}

export interface DimensionsListenerParameter {
    window: ScaledSize;
    screen: ScaledSize;
}
