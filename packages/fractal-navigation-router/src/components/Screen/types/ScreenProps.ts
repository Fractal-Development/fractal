import { LayerProps } from '@bma98/fractal-ui';
import { ScreenActivityState, StackPresentationType } from '../../../types';

export interface ScreenProps extends LayerProps {
    activityState: ScreenActivityState;
    active: ScreenActivityState;
    stackPresentation?: StackPresentationType;
    style: any;
}
