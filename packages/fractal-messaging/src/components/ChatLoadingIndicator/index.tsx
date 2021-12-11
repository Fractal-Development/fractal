import React from 'react';
import { Layer, LayerProps } from '@bma98/fractal-ui';
import { loadingCircleTransition, loadingCircleTransitionThree, loadingCircleTransitionTwo, loadingCircleVariants } from './config';

const bulletStyle = {
    backgroundColor: '#999999',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 2
};

export function ChatLoadingIndicator(props: LayerProps): JSX.Element | null {
    return (
        <Layer height={40} width={60} justifyContent="center" {...props}>
            <Layer
                backgroundColor="#ffffff"
                padding={8}
                borderRadius={20}
                flexDirection="row"
                from={loadingCircleVariants.start}
                animate={loadingCircleVariants.end}
                exit={loadingCircleVariants.start}
            >
                <Layer
                    style={bulletStyle}
                    from={loadingCircleVariants.start}
                    animate={loadingCircleVariants.end}
                    transition={loadingCircleTransition}
                />
                <Layer
                    style={bulletStyle}
                    from={loadingCircleVariants.start}
                    animate={loadingCircleVariants.end}
                    transition={loadingCircleTransitionTwo}
                />
                <Layer
                    style={bulletStyle}
                    from={loadingCircleVariants.start}
                    animate={loadingCircleVariants.end}
                    transition={loadingCircleTransitionThree}
                />
            </Layer>
        </Layer>
    );
}
