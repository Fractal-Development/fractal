import {
    SpaceProps,
    LayoutProps,
    PositionProps,
    ColorProps,
    BackgroundProps,
    TypographyProps,
    background,
    color,
    flexbox,
    layout,
    position,
    space,
    typography,
    border,
    BorderProps
} from 'styled-system';
import { css } from 'styled-components';
import { isValidMotionProp, LayoutProps as FramerProps, MotionProps } from 'framer-motion';

export type SharedStylesProps = SpaceProps &
    LayoutProps &
    PositionProps &
    ColorProps &
    BackgroundProps &
    TypographyProps &
    FramerProps &
    MotionProps &
    BorderProps;

export type SharedStylesComponent = React.FC<SharedStylesProps>;

export const SharedStyles = css`
    ${space};
    ${layout};
    ${position};
    ${color};
    ${background};
    ${flexbox};
    ${typography};
    ${border};
`;

export function shouldForwardProp(key: string): boolean {
    if (key === 'children') return true;
    return isValidMotionProp(key);
}
