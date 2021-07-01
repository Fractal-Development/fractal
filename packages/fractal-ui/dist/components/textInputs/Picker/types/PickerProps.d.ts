import { LayerProps } from '../../../containers/Layer/types';
import { PickerModalContentProps } from './PickerModalContentProps';
export interface PickerProps extends Partial<Omit<LayerProps, 'children'>>, Omit<PickerModalContentProps, 'onFinalIndexChange'> {
    disabled?: boolean;
}
