import { ResizeModeProps } from '../../Image/types';
import { LayerProps } from '../Layer/types';

export interface ImageBackgroundProps extends LayerProps, Omit<ResizeModeProps, 'backgroundSize'> {}
