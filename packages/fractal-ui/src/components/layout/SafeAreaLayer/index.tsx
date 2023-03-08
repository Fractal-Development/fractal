import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { Layer } from '../Layer';
import { LayerProps } from '../Layer/types';

const StyledSafeAreaLayer = styled(Layer)`
    padding-top: env(safe-area-inset-top);
    padding-left: env(safe-area-inset-left);
    padding-bottom: env(safe-area-inset-bottom);
    padding-right: env(safe-area-inset-right);
`;

const SafeAreaLayer = forwardRef((props: LayerProps, ref: any): JSX.Element => <StyledSafeAreaLayer ref={ref} style={{}} {...props} />);

SafeAreaLayer.displayName = 'SafeAreaLayer';

export { SafeAreaLayer };
