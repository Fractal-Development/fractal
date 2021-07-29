import { PlacementType } from '../types';
export declare function alignWebPortalPopoverIfRequired(style: {
    left: number;
    top: number;
    transform?: string;
}, anchorElement: HTMLDivElement, popoverWidth: number, popoverHeight: number, placement: PlacementType): {
    left: number;
    top: number;
    transform?: string;
};
