import React, { useState } from 'react';
import { ChatContent, MinimalMessageData } from '@bma98/fractal-messaging';

const defaultMessages: Array<MinimalMessageData> = [
    {
        id: '1',
        senderType: 'bot',
        favorite: true,
        text: 'Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s., when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id: '2',
        senderType: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: '3',
        senderType: 'bot',
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
        id: '4',
        senderType: 'user',
        favorite: true,
        text: 'Lorem Ipsum has been the bob'
    },
    {
        id: '5',
        senderType: 'bot',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: '6',
        senderType: 'user',
        text: 'Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s., when an unknown printer took a galley of type.'
    },
    {
        id: '7',
        senderType: 'user',
        text: 'Este es un mensaje con ñoño'
    },
    {
        id: '8',
        senderType: 'bot',
        image: 'https://picsum.photos/id/237/200/160'
    },
    {
        id: '9',
        senderType: 'bot',
        video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    },
    {
        id: '10',
        senderType: 'bot',
        video: 'https://www.youtube.com/watch?v=cnFVmvbztKQ'
    },
    {
        id: '11',
        senderType: 'bot',
        audio: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3'
    }
];

export function ChatContentFragment(): JSX.Element {
    const [messages, setMessages] = useState(defaultMessages);

    const handleFavoriteMessage = (message: MinimalMessageData) => {
        const newMessage = { ...message, favorite: !message.favorite };
        setMessages((currentMessages) => currentMessages.map((messageItem) => (messageItem.id === message.id ? newMessage : messageItem)));
    };

    const handleSendMessage = (message: string) => {
        const newId = messages.length;

        setMessages((currentMessages) => [...currentMessages, { id: newId.toString(), senderType: 'user', text: message }]);
    };

    return (
        <ChatContent
            messages={messages}
            onFavoritePress={handleFavoriteMessage}
            onSharePress={(message) => console.log('sharePress: ', message)}
            onSend={handleSendMessage}
        />
    );
}
