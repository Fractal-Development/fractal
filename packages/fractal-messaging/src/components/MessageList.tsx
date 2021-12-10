import React, { useCallback, useState, useMemo, useEffect, useRef, Fragment } from 'react';
import { LayoutProvider, DataProvider, useTheme, Layer, RecyclerView } from '@bma98/fractal-ui';
import { AutoSizer } from './AutoSizer';
import { MessageListProps, MinimalMessageData } from './types';
import { ChatMessage } from './ChatMessage';
import { useGetTextHeight } from '../hooks/useGetTextHeight';
import { useChatMessageSize } from '../hooks/useChatMessageSize';
import { MESSAGE_AUDIO_HEIGHT } from '../constants';
import { useGetContainerWidth } from '../hooks/useGetContainerWidth/index';

const dataProvider = new DataProvider((rowOne, rowTwo) => {
    return rowOne.id !== rowTwo.id;
});

enum MessageViewTypes {
    Message,
    Footer
}

function getMaxBubbleWidth(width: number, paddingHorizontal: number) {
    return (width - paddingHorizontal * 2) * 0.75;
}

export function MessageList<T extends MinimalMessageData>({
    messages,
    onFavoritePress,
    onSharePress,
    messageActions,
    getBubbleColor,
    footerComponent,
    ...layerProps
}: MessageListProps<T>): JSX.Element {
    const messagesWithAccessoryViews = useMemo(() => {
        if (footerComponent) {
            return [...messages, {}];
        } else {
            return messages;
        }
    }, [messages, footerComponent]);
    const listView = useRef<any>();
    const containerRef = useRef<any>();
    const { spacings, sizes } = useTheme();
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(messagesWithAccessoryViews));
    const [containerWidth, containerLayoutProps] = useGetContainerWidth(containerRef);
    const [maxContentWidth, setMaxContentWidth] = useState(getMaxBubbleWidth(containerWidth, spacings.m) - (spacings.m * 2 + 6));
    const { height: chatMessageHeight } = useChatMessageSize();
    const getTextHeight = useGetTextHeight(maxContentWidth);
    const heights: Array<number | undefined> = messagesWithAccessoryViews.map(() => undefined);

    const scrollToEnd = useCallback(
        () =>
            setTimeout(() => {
                if (listView.current && listView.current._initComplete) {
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
                    return footerComponent ?? <Fragment />;
            }
        },
        [getBubbleColor, messageActions, onFavoritePress, onSharePress, footerComponent]
    );

    const layoutProvider = useMemo(() => {
        return new LayoutProvider(
            (index) => {
                const message = messages[index];
                return message != null ? MessageViewTypes.Message : MessageViewTypes.Footer;
            },
            (type, dim, index) => {
                switch (type) {
                    case MessageViewTypes.Message:
                        let height = heights[index];
                        if (height != null) {
                            dim.height = height;
                        } else {
                            height = messageHeightCalculator(messages[index]);
                            heights[index] = height;
                            dim.height = height as number;
                        }
                        break;
                    default:
                        dim.height = sizes.textFieldHeight;
                }

                dim.width = containerWidth;
            }
        );
    }, [heights, messageHeightCalculator, messages, containerWidth, sizes.textFieldHeight]);

    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(messagesWithAccessoryViews));
    }, [messagesWithAccessoryViews, maxContentWidth]);

    useEffect(() => {
        scrollToEnd();
    }, [dataProviderState, scrollToEnd]);

    useEffect(() => {
        if (containerRef.current?.clientWidth != null) {
            setMaxContentWidth(getMaxBubbleWidth(containerRef.current?.clientWidth, spacings.m));
        }
    }, [containerRef.current?.clientWidth, spacings.m]);

    return (
        <Layer flex={1} ref={containerRef} {...containerLayoutProps} {...layerProps}>
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
                            initialRenderIndex={messagesWithAccessoryViews.length - 1}
                            scrollViewProps={{ showsVerticalScrollIndicator: false }}
                        />
                    )}
                </AutoSizer>
            )}
        </Layer>
    );
}
