/// <reference types="react" />
import { SpaceProps, LayoutProps, PositionProps, ColorProps, BackgroundProps, TypographyProps, BorderProps } from 'styled-system';
import { LayoutProps as FramerProps, MotionProps } from 'framer-motion';
export declare type SharedStylesProps = SpaceProps & LayoutProps & PositionProps & ColorProps & BackgroundProps & TypographyProps & FramerProps & MotionProps & BorderProps;
export declare type SharedStylesComponent = React.FC<SharedStylesProps>;
export declare const SharedStyles: import("styled-components").FlattenSimpleInterpolation;
export declare function shouldForwardProp(key: string): boolean;
