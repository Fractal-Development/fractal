/// <reference types="react" />
export interface Size {
    height: number;
    width: number;
}
export interface AutoSizerProps {
    children: (size: Size) => React.ReactNode;
    onResize?: (size: Size) => void;
}
