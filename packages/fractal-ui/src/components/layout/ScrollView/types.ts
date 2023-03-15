import { LayerProps } from '../Layer/types';

export interface ScrollViewProps extends LayerProps {
    horizontal?: boolean;
    showsHorizontalScrollIndicator?: boolean;
    /**
     * Enables nested scrolling for Android API level 21+. Nested scrolling is supported by default on iOS.
     */
    nestedScrollEnabled?: boolean;
}
