import { LayerProps } from '../../../containers/Layer/types';
export interface TimePickerProps extends Partial<Omit<LayerProps, 'children'>> {
    value?: Date;
    iosDoneText: string;
    initialDate?: Date;
    onChange?: (date: Date) => void;
}
