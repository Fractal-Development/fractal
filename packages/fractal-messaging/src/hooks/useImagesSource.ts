import { useState } from 'react';
import { ImageSourcePropType } from '@fractal/fractal-ui';
import { MinimalMessageData } from '../components/types';

interface ImageMessage {
    id: string;
    image: string;
    senderType: 'user' | 'bot';
}

function isImageMessage(value: unknown): value is ImageMessage {
    const casted = value as ImageMessage;

    return casted.id != null && casted.senderType != null && casted.image != null && typeof casted.image === 'string';
}

export function useImagesSource(messages: MinimalMessageData[]): [ImageSourcePropType[], number, (message: MinimalMessageData) => void] {
    const [imageIndex, setImageIndex] = useState(0);
    const imageMessages: ImageMessage[] = messages.filter((message) => isImageMessage(message)) as ImageMessage[];
    const images = imageMessages.map((message) => message.image);

    const updateImageIndex = (message: MinimalMessageData) => {
        const newImageIndex = imageMessages.findIndex((imageMessage) => imageMessage.id === message.id);
        setImageIndex(newImageIndex);
    };

    return [images, imageIndex, updateImageIndex];
}
