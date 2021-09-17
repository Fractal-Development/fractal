export interface WebProps {
    className?: string;
    pointerEvents?: 'none' | 'auto' | 'box-none';
    cursor?: 'auto' | 'default' | 'none' | 'alias' | 'all-scroll' | 'cell' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'crosshair' | 'text' | 'vertical-text' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'col-resize' | 'e-resize' | 'ew-resize' | 'n-resize' | 'ne-resize' | 'ns-resize' | 'nw-resize' | 'nwse-resize' | 'row-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize';
    boxSizing?: 'border-box' | 'content-box';
    focusable?: boolean;
    borderStyle?: 'solid' | 'dotted' | 'dashed';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}
export declare function extractWebProps({ borderStyle, cursor, pointerEvents, focusable, boxSizing, alignItems }: WebProps): string;
