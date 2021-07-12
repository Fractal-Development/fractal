import { ResizeModeProps } from '../Image/types';
import { LayerProps } from '../../layout';
export interface ImageBackgroundProps extends LayerProps, Omit<ResizeModeProps, 'backgroundSize'> {
}
