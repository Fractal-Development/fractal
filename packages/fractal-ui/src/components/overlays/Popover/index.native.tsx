import React, { useCallback, useEffect, useMemo, useState, forwardRef, useRef } from 'react';
import { LayoutChangeEvent, StyleProp, View, ViewStyle } from 'react-native';

import { Pressable } from '../../interactive/buttons/Pressable';
import { Layer } from '../../layout';
import { Modal } from '../modals';
import { LayoutRectangle, PopoverProps } from './types';
import { getNativePlacementOffsetStyle } from './utils/getNativePlacementOffsetStyle';
import { styleVariants } from './utils/styleVariants';

const Popover = forwardRef(
    (
        {
            active,
            placement = 'bottom',
            popoverChildren,
            popoverContainerProps,
            onRequestClose,
            children,
            modalBackgroundColor,
            ...others
        }: PopoverProps,
        ref: any
    ): JSX.Element => {
        const [anchorViewLayout, setAnchorViewLayout] = useState<LayoutRectangle | undefined>();
        const [popoverViewLayout, setPopoverViewLayout] = useState<LayoutRectangle>({ x: 0, y: 0, height: 0, width: 0 });
        const anchorRef = useRef<View>();

        const styles: StyleProp<ViewStyle> = useMemo(() => {
            if (active && anchorViewLayout != null && popoverViewLayout.height !== 0 && popoverViewLayout.width !== 0) {
                return getNativePlacementOffsetStyle(anchorViewLayout, popoverViewLayout, placement);
            } else {
                return {
                    opacity: 0
                };
            }
        }, [active, anchorViewLayout, placement, popoverViewLayout]);

        const onPopoverLayout = useCallback(({ nativeEvent: { layout } }: LayoutChangeEvent) => {
            setPopoverViewLayout(layout);
        }, []);

        const measureInWindow = useCallback(() => {
            anchorRef.current?.measureInWindow((x, y, width, height) => {
                setAnchorViewLayout({ x, y, width: Math.ceil(width), height: Math.ceil(height) });
            });
        }, []);

        useEffect((): void => {
            if (active) {
                measureInWindow();
            }
        }, [active, measureInWindow]);

        return (
            <Layer ref={ref} {...others}>
                {children(anchorRef)}
                <Modal visible={active}>
                    <Pressable
                        zIndex={0}
                        onPress={onRequestClose}
                        position='absolute'
                        width='100%'
                        height='100%'
                        from={styleVariants.initial}
                        animate={styleVariants.visible}
                        exit={styleVariants.initial}
                        backgroundColor={modalBackgroundColor}
                    />
                    <View style={[{ position: 'absolute', zIndex: 2 }, styles]}>
                        <Layer
                            onLayout={onPopoverLayout}
                            from={styleVariants.initial}
                            animate={styleVariants.visible}
                            exit={styleVariants.initial}
                            {...popoverContainerProps}
                        >
                            {popoverChildren(anchorViewLayout?.width)}
                        </Layer>
                    </View>
                </Modal>
            </Layer>
        );
    }
);

Popover.displayName = 'Popover';

export { Popover };
