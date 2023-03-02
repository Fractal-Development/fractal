import { isValidMotionProp } from 'framer-motion';

/**
 * If has problems with next js, other way to fix is use a white list of properties.
 * 
 * enabled this white list if is necessary
 * const whiteListedKeys = [
    'children',
    'src',
    'href',
    'to',
    'onClick',
    'target',
    'id',
    'onChange',
    'dangerouslySetInnerHTML',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseDown',
    'onTouchStart',
    'onMouseUp',
    'onTouchEnd',
    'placeholder',
    'alt',
    'loading',
    'decoding',
    'cursor',
    'onKeyDown',
    'type',
    'value',
    'role',
    'aria-placeholder',
    'aria-disabled',
    'aria-label',
    'autoCapitalize',
    'inputMode',
    'dir',
    'rows',
    'readOnly'
];
* in shouldForwardProp function you can validate wite list with this code: if (whiteListedKeys.includes(prop)) return true;
**/

export function shouldForwardProp(prop: string, defaultValidatorFn: (prop: string) => boolean): boolean {
    return isValidMotionProp(prop) || defaultValidatorFn(prop);
}
