import { PieArcDatum, Arc } from 'd3-shape';
import { PieChartData } from '../../../types';

export interface PieChartContentProps {
    width: number;
    height: number;
    data: Array<PieChartData>;
    pieSlices: Array<PieArcDatum<PieChartData>>;
    createArc: Arc<any, PieChartData>;
    onPress?: (index: number) => void;
}
