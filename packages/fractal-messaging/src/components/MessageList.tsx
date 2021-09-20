import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { LayoutProvider, DataProvider, AutoSizeRecyclerView, useTheme, Layer } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { MessageListProps, MinimalMessageData } from './types';
import { ChatMessage } from './ChatMessage';
import { useGetTextHeight } from '../hooks/useGetTextHeight';
import { useChatMessageSize } from '../hooks/useChatMessageSize';
import { MESSAGE_AUDIO_HEIGHT } from '../constants';

const dataProvider = new DataProvider((rowOne, rowTwo) => {
    return rowOne !== rowTwo;
});

export function MessageList<T extends MinimalMessageData>({
    messages,
    onFavoritePress,
    onSharePress,
    messageActions,
    getBubbleColor,
    ...layerProps
}: MessageListProps<T>): JSX.Element {
    const { spacings } = useTheme();
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(messages));
    const width = useSizeValue('width');
    const { height: chatMessageHeight } = useChatMessageSize();
    const getTextHeight = useGetTextHeight((width - spacings.m * 2) * 0.75 - (spacings.m * 2 + 6));
    const heights: Array<number | undefined> = messages.map(() => undefined);

    const messageHeightCalculator = useCallback(
        (message: T): number => {
            let contentHeight = 0;
            if (message.image || message.video) {
                contentHeight = chatMessageHeight;
            } else if (message.audio) {
                contentHeight = MESSAGE_AUDIO_HEIGHT;
            } else {
                contentHeight = getTextHeight(message.text as string);
            }
            return contentHeight + spacings.m * 3;
        },
        [chatMessageHeight, getTextHeight, spacings.m]
    );

    const layoutProvider = useMemo(() => {
        return new LayoutProvider(
            () => {
                return 0;
            },
            (_, dim, index) => {
                let height = heights[index];
                if (height != null) {
                    dim.height = height;
                } else {
                    height = messageHeightCalculator(messages[index]);
                    heights[index] = height;
                    dim.height = height as number;
                    //console.log('HEIGHT: ', height);
                }
                dim.width = width;
                return;
            }
        );
    }, [heights, messageHeightCalculator, messages, width]);

    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(messages));
    }, [messages, width]);

    const renderBubbleMessage = useCallback(
        (_, data) => {
            return (
                <ChatMessage
                    message={data}
                    key={data.id}
                    onFavoritePress={onFavoritePress}
                    onSharePress={onSharePress}
                    messageActions={messageActions}
                    getBubbleColor={getBubbleColor}
                />
            );
        },
        [getBubbleColor, messageActions, onFavoritePress, onSharePress]
    );

    return (
        <Layer flex={1} {...layerProps}>
            <AutoSizeRecyclerView
                key={width}
                layoutProvider={layoutProvider}
                dataProvider={dataProviderState}
                rowRenderer={renderBubbleMessage}
                initialRenderIndex={messages.length - 1}
            />
        </Layer>
    );
}
