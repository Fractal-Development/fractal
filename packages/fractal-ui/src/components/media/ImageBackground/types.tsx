import { LayerProps } from '../../layout';
import { ResizeModeProps } from '../Image/types';

export interface ImageBackgroundProps extends LayerProps, Omit<ResizeModeProps, 'backgroundSize'> {}
