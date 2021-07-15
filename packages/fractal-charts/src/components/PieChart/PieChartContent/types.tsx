import * as shape from 'https://unpkg.com/d3-shape?module';
import { PieChartData } from '../../../types';

export interface PieChartContentProps {
    width: number;
    height: number;
    data: Array<PieChartData>;
    pieSlices: Array<shape.PieArcDatum<PieChartData>>;
    createArc: shape.Arc<any, PieChartData>;
    onPress?: (index: number) => void;
}
