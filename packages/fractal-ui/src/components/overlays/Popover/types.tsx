import { MutableRefObject, ReactNode } from 'react';

import { LayerProps } from '../../layout';

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
    transform?: ({ translateX: number } | { translateY: number })[];
}

export type PlacementType = 'top' | 'right' | 'bottom' | 'left';

export interface PopoverProps extends Omit<LayerProps, 'children'> {
    active: boolean;
    onRequestClose: () => void;
    placement?: PlacementType;
    usePortal?: boolean;
    popoverChildren: (anchorWidth?: number) => ReactNode;
    popoverContainerProps?: Omit<LayerProps, 'children'>;
    modalBackgroundColor?: string;
    children: (anchorRef: any) => ReactNode | ReactNode[];
}

export interface PopoverPortalContentProps extends Omit<PopoverProps, 'placement' | 'usePortal'> {
    anchorRef: MutableRefObject<HTMLDivElement | undefined>;
    popoverRef: MutableRefObject<HTMLDivElement | undefined>;
    placementOffsetStyle?: PlacementOffsetStyle;
    anchorWidth?: number;
}
