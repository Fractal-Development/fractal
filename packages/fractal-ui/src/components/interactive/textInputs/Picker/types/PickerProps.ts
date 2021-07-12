import { LayerProps } from '../../../../layout';
import { PickerModalContentProps } from './PickerModalContentProps';

export interface PickerProps extends Partial<Omit<LayerProps, 'children'>>, Omit<PickerModalContentProps, 'onFinalIndexChange'> {
    disabled?: boolean;
}
