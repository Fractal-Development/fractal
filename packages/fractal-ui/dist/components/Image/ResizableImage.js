import styled from 'styled-components';
import { Layer } from '../containers/Layer';
function extractResizeModeProps({ source, resizeMode = 'cover', backgroundSize }) {
    return `
    height: 100%;
    width: 100%;
    background-image: url(${source});
    background-position: ${resizeMode == 'repeat' ? '0% 0%' : 'center'};
    background-repeat: ${resizeMode == 'repeat' ? 'repeat' : 'no-repeat'};
    background-size: ${resizeMode == 'center' || resizeMode === 'repeat'
        ? 'auto'
        : resizeMode === 'contain'
            ? 'contain'
            : resizeMode === 'stretch'
                ? '100% 100%'
                : 'cover'};
    ${backgroundSize != null ? `background-size: ${backgroundSize}` : ''};
    `;
}
export const ResizableImage = styled(Layer) `
    ${extractResizeModeProps}
`;
//# sourceMappingURL=ResizableImage.js.map