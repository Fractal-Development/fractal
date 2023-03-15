export interface BaseSizeClass<T> {
    compactPhone: T;
    largePhone: T;
    compactTablet: T;
    largeTablet: T;
    extraLargeTablet: T;
    compactDesktop: T;
    largeDesktop: T;
    extraLargeDesktop: T;
}

export interface SizeClass extends BaseSizeClass<number> {}
export interface MediaQuerySizeClass extends Partial<BaseSizeClass<MediaQueryList>> {}
