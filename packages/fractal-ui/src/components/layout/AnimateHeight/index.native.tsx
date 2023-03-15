import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { View as MotiView, useDynamicAnimation, TransitionConfig } from 'moti';
import { AnimateHeightProps } from './types';

const styles = StyleSheet.create({
    autoBottom: {
        bottom: 'auto'
    },
    hidden: {
        overflow: 'hidden'
    }
});

export function AnimateHeight({
    children,
    hide = false,
    style,
    delay = 0,
    transition = {
        type: 'spring',
        delay
    },
    initialHeight = 0
}: AnimateHeightProps) {
    const animation = useDynamicAnimation(() => ({
        height: hide ? 0 : initialHeight
    }));
    const [measuredHeight, setHeight] = useState(initialHeight);

    let height = measuredHeight;

    if (hide) {
        height = 0;
    }

    const mounted = useRef(false);

    useEffect(function mount() {
        mounted.current = true;

        return () => {
            mounted.current = false;
        };
    }, []);

    useEffect(
        function updateHeight() {
            if (hide) {
                animation.animateTo({
                    height: 0
                });
            } else if (animation.current?.height !== height) {
                animation.animateTo({
                    height
                });
            }
        },
        [animation, height, hide]
    );

    const notVisible = !height || hide;

    return (
        <MotiView state={animation} transition={transition as TransitionConfig} style={[style, height || hide ? styles.hidden : {}]}>
            <MotiView
                style={[StyleSheet.absoluteFillObject, styles.autoBottom]}
                animate={{ opacity: notVisible ? 0 : 1 }}
                transition={transition as TransitionConfig}
                onLayout={(next) => {
                    if (mounted.current) {
                        setHeight(next.nativeEvent.layout.height);
                    }
                }}
            >
                {children}
            </MotiView>
        </MotiView>
    );
}
