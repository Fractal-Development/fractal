import React, { useCallback, useState, useMemo, useEffect, useRef } from 'react';
import { LayoutProvider, DataProvider, useTheme, Layer, RecyclerView } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { AutoSizer } from './AutoSizer';
import { MessageListProps, MinimalMessageData } from './types';
import { ChatMessage } from './ChatMessage';
import { useGetTextHeight } from '../hooks/useGetTextHeight';
import { useChatMessageSize } from '../hooks/useChatMessageSize';
import { MESSAGE_AUDIO_HEIGHT } from '../constants';
import { MessageInput } from './MessageInput';

const dataProvider = new DataProvider((rowOne, rowTwo) => {
    return rowOne.id !== rowTwo.id;
});

enum MessageViewTypes {
    Message,
    MessageInput
}

export function MessageList<T extends MinimalMessageData>({
    messages,
    onFavoritePress,
    onSharePress,
    messageActions,
    getBubbleColor,
    placeholder,
    messageInputButtonVariant,
    onSend,
    ...layerProps
}: MessageListProps<T>): JSX.Element {
    const listView = useRef<any>();
    const { spacings, sizes } = useTheme();
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(messages));
    const width = useSizeValue('width');
    const { height: chatMessageHeight } = useChatMessageSize();
    const getTextHeight = useGetTextHeight((width - spacings.m * 2) * 0.75 - (spacings.m * 2 + 6));
    const heights: Array<number | undefined> = messages.map(() => undefined);

    const scrollToEnd = useCallback(
        () =>
            setTimeout(() => {
                if (listView.current) {
                    listView.current.scrollToEnd();
                }
            }),
        []
    );

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

    const rowRenderer = useCallback(
        (type, data) => {
            switch (type) {
                case MessageViewTypes.Message:
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
                default:
                    return (
                        <MessageInput
                            placeholder={placeholder}
                            useForegroundVariant
                            buttonVariant={messageInputButtonVariant}
                            onSend={onSend}
                        />
                    );
            }
        },
        [getBubbleColor, messageActions, onFavoritePress, onSharePress, placeholder, messageInputButtonVariant, onSend]
    );

    const layoutProvider = useMemo(() => {
        return new LayoutProvider(
            (index) => {
                return index === messages.length - 1 ? MessageViewTypes.MessageInput : MessageViewTypes.Message;
            },
            (_, dim, index) => {
                const isMesageInput = index === messages.length - 1;
                if (isMesageInput) {
                    dim.height = sizes.textFieldHeight;
                } else {
                    let height = heights[index];
                    if (height != null) {
                        dim.height = height;
                    } else {
                        height = messageHeightCalculator(messages[index]);
                        heights[index] = height;
                        dim.height = height as number;
                    }
                }

                dim.width = width;
            }
        );
    }, [heights, messageHeightCalculator, messages, width, sizes.textFieldHeight]);

    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows([...messages, {}]));
    }, [messages, width]);

    useEffect(() => {
        scrollToEnd();
    }, [dataProviderState, scrollToEnd]);

    return (
        <Layer flex={1} {...layerProps}>
            {messages.length > 0 && (
                <AutoSizer onResize={scrollToEnd}>
                    {({ height, width }) => (
                        <RecyclerView
                            ref={listView}
                            canChangeSize
                            style={{ height, width }}
                            key={width}
                            layoutProvider={layoutProvider}
                            dataProvider={dataProviderState}
                            rowRenderer={rowRenderer}
                            initialRenderIndex={messages.length - 1}
                            scrollViewProps={{ showsVerticalScrollIndicator: false }}
                        />
                    )}
                </AutoSizer>
            )}
        </Layer>
    );
}
