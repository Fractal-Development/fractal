import React from 'react';
import {
    Layer,
    useTheme,
    HorizontalLayer,
    Avatar,
    LayerProps,
    OptionsButton,
    ImageProps,
    Separator,
    TouchableOpacity
} from '@fractal/fractal-ui';
import { LoveToggleButton } from './LoveToggleButton';
import { EllipsizeText } from './EllipsizeText';

interface MediaContentRowProps extends Omit<LayerProps, 'children'> {
    imageSource: ImageProps['source'];
    title: string;
    subtitle?: string;
    addSeparator?: boolean;
    enableLoveButton?: boolean;
    isLoved?: boolean;
    checkedLoveColor?: string;
    onHeartPress?: () => void;
    showOptionsButton?: boolean;
    onOptionsPress?: () => void;
    onPress?: () => void;
}

export function MediaContentRow({
    imageSource,
    title,
    subtitle,
    addSeparator,
    enableLoveButton,
    onHeartPress,
    isLoved,
    checkedLoveColor,
    showOptionsButton,
    onOptionsPress,
    onPress,
    ...layerProps
}: MediaContentRowProps): JSX.Element {
    const { spacings } = useTheme();
    return (
        <>
            <Layer {...layerProps}>
                <HorizontalLayer alignItems='center' minHeight={48}>
                    <TouchableOpacity onPress={onPress} flex={1} flexDirection='row'>
                        <Avatar source={imageSource} size={48} />
                        <Layer
                            minWidth={0}
                            marginLeft={spacings.s}
                            height={48}
                            flex={1}
                            justifyContent={subtitle ? 'space-between' : 'center'}
                        >
                            <EllipsizeText variant='normal'>{title}</EllipsizeText>
                            {subtitle && <EllipsizeText variant='smallLabel'>{subtitle}</EllipsizeText>}
                        </Layer>
                    </TouchableOpacity>
                    <Layer>
                        {enableLoveButton ? (
                            <LoveToggleButton onPress={onHeartPress} checked={isLoved} checkedColor={checkedLoveColor} />
                        ) : showOptionsButton ? (
                            <OptionsButton onPress={onOptionsPress} />
                        ) : null}
                    </Layer>
                </HorizontalLayer>
            </Layer>
            {addSeparator ? <Separator /> : null}
        </>
    );
}
