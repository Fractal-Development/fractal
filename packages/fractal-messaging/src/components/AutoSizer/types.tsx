export interface Size {
    height: number;
    width: number;
}

export interface AutoSizerProps {
    children: (size: Size) => React.ReactElement;
    onResize?: (((size: Size) => void) & React.ReactEventHandler<HTMLDivElement>) | undefined;
}
