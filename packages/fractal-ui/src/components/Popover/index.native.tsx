import React, { useCallback, useEffect, useMemo, useState, forwardRef, useRef } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { Pressable } from '../buttons/Pressable';
import { Layer } from '../containers/Layer';
import { Modal } from '../modals/Modal';
import { styleVariants } from './utils/styleVariants';
import { LayoutRectangle, PopoverProps } from './types';
import { getNativePlacementOffsetStyle } from './utils/getNativePlacementOffsetStyle';

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
        const [anchorViewLayout, setAnchorViewLayout] = useState<LayoutRectangle>({ x: 0, y: 0, height: 0, width: 0 });
        const [popoverViewLayout, setPopoverViewLayout] = useState<LayoutRectangle>({ x: 0, y: 0, height: 0, width: 0 });
        const anchorRef = useRef<View>();

        const styles = useMemo(() => {
            return getNativePlacementOffsetStyle(anchorViewLayout, popoverViewLayout, placement);
        }, [anchorViewLayout, placement, popoverViewLayout]);

        const onPopoverLayout = useCallback(({ nativeEvent: { layout } }: LayoutChangeEvent) => {
            setPopoverViewLayout(layout);
        }, []);

        const measureInWindow = useCallback(() => {
            anchorRef.current?.measureInWindow((x, y, width, height) => {
                setAnchorViewLayout({ x, y, width, height });
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
                        backgroundColor={modalBackgroundColor}
                    />
                    <Layer
                        onLayout={onPopoverLayout}
                        initial={styleVariants.initial}
                        animate={styleVariants.visible}
                        exit={styleVariants.initial}
                        position={'absolute'}
                        zIndex={2}
                        style={styles}
                        {...popoverContainerProps}
                    >
                        {popoverChildren(anchorViewLayout.width)}
                    </Layer>
                </Modal>
            </Layer>
        );
    }
);

Popover.displayName = 'Popover';

export { Popover };
