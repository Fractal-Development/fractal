import { HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { KeyboardTypeOptions } from '../types';

export function getHTMLInputTypeAndInputModeAttributesForKeyboardType(keyboardType: KeyboardTypeOptions): {
    type?: HTMLInputTypeAttribute;
    inputMode: HTMLAttributes<undefined>['inputMode'];
} {
    switch (keyboardType) {
        case 'default':
            return { type: 'text', inputMode: undefined };
        case 'number-pad':
            return { type: undefined, inputMode: 'numeric' };
        case 'decimal-pad':
            return { type: undefined, inputMode: 'decimal' };
        case 'numeric':
            return { type: undefined, inputMode: 'numeric' };
        case 'email-address':
            return { type: 'email', inputMode: undefined };
        case 'phone-pad':
            return { type: 'tel', inputMode: undefined };
        case 'url':
            return { type: 'url', inputMode: undefined };
        default:
            return { type: undefined, inputMode: undefined };
    }
}
