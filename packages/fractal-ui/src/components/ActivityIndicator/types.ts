import { DimensionProps } from '../../sharedProps/DimensionProps';

export interface ActivityIndicatorCircleProps {
    color: string;
}

export interface ActivityIndicatorProps extends ActivityIndicatorCircleProps, DimensionProps {}
