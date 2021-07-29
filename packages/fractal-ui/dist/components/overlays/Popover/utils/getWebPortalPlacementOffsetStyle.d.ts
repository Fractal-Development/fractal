import { MutableRefObject } from 'react';
import { PlacementOffsetStyle, PlacementType } from '../types';
export declare function getWebPortalPlacementOffsetStyle(anchorRef: MutableRefObject<HTMLDivElement | undefined>, popoverRef: MutableRefObject<HTMLDivElement | undefined>, placement: PlacementType): PlacementOffsetStyle | undefined;
