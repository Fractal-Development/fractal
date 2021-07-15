import * as shape from '../../../../node_modules/d3-shape/src/index.js';
import { PieChartData } from '../../../types';
export interface PieChartContentProps {
    width: number;
    height: number;
    data: Array<PieChartData>;
    pieSlices: Array<shape.PieArcDatum<PieChartData>>;
    createArc: shape.Arc<any, PieChartData>;
    onPress?: (index: number) => void;
}
