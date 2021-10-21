import { CurveFactory } from 'd3-shape';
import { ScaleBand, ScaleLinear, ScaleLogarithmic, ScalePower, ScaleTime, scaleLinear } from 'd3-scale';
import { LayerProps } from '@bma98/fractal-ui';

export type DimensionsType = {
    width: number;
    height: number;
};

export interface ChartContainerProps extends LayerProps {
    contentStyle?: any;
    onChangeDimensions: (dimensions: DimensionsType) => void;
    rotate?: number;
}

export interface PieChartData {
    value: number;
    color?: string;
}

export type SortFunction<T> = (a: T, b: T) => number;

export interface PieChartProps extends Omit<LayerProps, 'children'> {
    innerRadius?: number | string;
    outerRadius?: number | string;
    padAngle?: number;
    startAngle?: number;
    endAngle?: number;
    data: Array<PieChartData>;
    selectedSliceIndex?: number;
    valueAccessor?: (item: PieChartData) => number;
    sort?: SortFunction<PieChartData>;
}

export type XYPair = { y: number; x: number };

export type Coordinates = Array<XYPair>;

type GridDirection = 'VERTICAL' | 'HORIZONTAL' | 'BOTH';

export interface GridProps<T> {
    direction?: GridDirection;
    belowChart?: boolean;
    ticks?: T[];
    x?: (t: T) => number;
    y?: (t: T) => number;
}

interface AccessorFunctionProps<T> {
    index: number;
    item: T;
}

export type ScaleType<Range, Output> =
    | ScaleLinear<Range, Output>
    | ScaleLogarithmic<Range, Output>
    | ScalePower<Range, Output>
    | ScaleTime<Range, Output>;

type AccessorFunction<T, U> = (props: AccessorFunctionProps<T>) => U;
export type ScaleFunction = () => ScaleType<any, any> | ScaleBand<any>;

export type ScaleLinearFunction = typeof scaleLinear;

export interface GradientConfig {
    startColor: string;
    startOpacity: number;
    endColor: string;
    endOpacity: number;
}

export interface AreaChartProps extends Omit<LayerProps, 'children'> {
    data: Array<number>;
    areaColor: string;
    lineColor?: string;
    lineWidth?: number;
    dotRadius?: number;
    gradientConfig?: GradientConfig;
    curve?: CurveFactory;
    start?: number;
    contentInset?: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    };
    gridMin?: number;
    gridMax?: number;
    numberOfTicks?: number;
    xScale?: ScaleLinearFunction;
    yScale?: ScaleLinearFunction;
    xAccessor?: AccessorFunction<number, number>;
    yAccessor?: AccessorFunction<number, number>;
    yMin?: number;
    yMax?: number;
    xMin?: number;
    xMax?: number;
    clampX?: boolean;
    clampY?: boolean;
}

export interface AxisProps extends Omit<LayerProps, 'children'> {
    data: Array<number>;
    spacingInner?: number;
    spacingOuter?: number;
    formatLabel?: (value: any, index: number) => number | string;
    scale?: ScaleLinearFunction;
    numberOfTicks?: number;
    textProps?: {
        fontSize?: number;
        fontFamily?: string;
        fontWeight?: number | string;
    };
    color?: string;
}

export interface XAxisProps extends AxisProps {
    contentInset?: {
        left?: number;
        right?: number;
    };
    min?: number;
    max?: number;
    xAccessor?: AccessorFunction<number, any>;
}

export interface YAxisProps extends AxisProps {
    contentInset?: {
        top?: number;
        bottom?: number;
    };
    min?: number;
    max?: number;
    yAccessor?: AccessorFunction<number, any>;
}

export type QuadrantVariant = 'first' | 'second' | 'third' | 'fourth';

export interface QuadrantChartColors {
    text?: string;
    firstQuadrant: string;
    secondQuadrant: string;
    thirdQuadrant: string;
    fourthQuadrant: string;
}

export interface QuadrantIcon {
    renderQuadrantIcon?: (color: string, size: number, activeQuadrant: QuadrantVariant) => JSX.Element;
}

export interface QuadrantChartProps extends Omit<LayerProps, 'children'>, QuadrantIcon {
    data: [number, number, number, number];
    showIconInQuadrant?: QuadrantVariant;
    colors: QuadrantChartColors;
    positiveYAxisLabel: string;
    negativeYAxisLabel: string;
    positiveXAxisLabel: string;
    negativeXAxisLabel: string;
    firstQuadrantLabel: string;
    secondQuadrantLabel: string;
    thirdQuadrantLabel: string;
    fourthQuadrantLabel: string;
}
