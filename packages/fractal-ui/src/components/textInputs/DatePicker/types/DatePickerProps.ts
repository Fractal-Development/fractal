import { LayerProps } from '../../../containers';

export interface DatePickerProps extends Partial<Omit<LayerProps, 'children'>> {
    value?: Date;
    initialDate?: Date;
    minDate?: Date;
    maxDate?: Date;
    iosDoneText: string;
    mode?: 'time' | 'date';
    onChange?: (date: Date) => void;
}
