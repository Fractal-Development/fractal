import React from 'react';
import { Layer, useTheme, HorizontalLayer, Avatar, Text, LayerProps, OptionsButton, ImageProps, Separator } from '@bma98/fractal-ui';
import { LoveToggleButton } from './LoveToggleButton';

interface MediaContentRowProps extends Omit<LayerProps, 'children'> {
    imageSource: ImageProps['source'];
    title: string;
    subtitle: string;
    addSeparator?: boolean;
    enableLoveButton?: boolean;
    isLoved?: boolean;
    checkedLoveColor?: string;
    onHeartPress?: () => void;
    showOptionsButton?: boolean;
    onOptionsPress?: () => void;
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
    ...layerProps
}: MediaContentRowProps): JSX.Element {
    const { spacings } = useTheme();
    return (
        <>
            <Layer {...layerProps}>
                <HorizontalLayer alignItems={'center'}>
                    <Avatar source={imageSource} size={48} />
                    <Layer marginLeft={spacings.s} height={48} flexGrow={1} justifyContent={'space-between'}>
                        <Text variant={'normal'}>{title}</Text>
                        <Text variant={'smallLabel'}>{subtitle}</Text>
                    </Layer>
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
