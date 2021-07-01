import { ReactNode } from 'react';
import { LayerProps } from '../containers/Layer/types';
export interface LayoutRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface PlacementOffsetStyle {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    transform?: string;
}
export interface NativePlacementOffsetStyle extends Omit<PlacementOffsetStyle, 'transform'> {
    transform?: Array<{
        translateX: number;
    } | {
        translateY: number;
    }>;
}
export declare type PlacementType = 'top' | 'right' | 'bottom' | 'left';
export interface PopoverProps extends Omit<LayerProps, 'children'> {
    active: boolean;
    onRequestClose: () => void;
    placement?: PlacementType;
    popoverChildren: (anchorWidth?: number) => ReactNode;
    popoverContainerProps?: Omit<LayerProps, 'children'>;
    modalBackgroundColor?: string;
    children: (anchorRef: any) => ReactNode | Array<ReactNode>;
}
