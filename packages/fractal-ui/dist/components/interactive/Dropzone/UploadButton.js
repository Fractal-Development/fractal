var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { LoadIcon } from '../../../assets';
import { useTheme } from '../../../context';
import { Button } from '../buttons/Button';
import { HorizontalLayer } from '../../layout';
import { Text } from '../../text';
import { getMIMETypes } from './fileTypes/getMIMETypes';
export function UploadButton({ onSelectFile, text = 'Seleccionar archivo', acceptedTypes }) {
    const { spacings } = useTheme();
    const pickFile = () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const result = yield DocumentPicker.getDocumentAsync({ type: getMIMETypes(acceptedTypes) });
        if (result.type === 'success') {
            onSelectFile({ name: result.name, size: result.size, uri: result.uri, type: (_a = result.mimeType) !== null && _a !== void 0 ? _a : '' });
        }
    });
    return (React.createElement(Button, { variant: 'main', onPress: pickFile },
        React.createElement(HorizontalLayer, { justifyContent: 'center', alignItems: 'center', padding: spacings.s },
            React.createElement(LoadIcon, { width: 24, height: 24, fill: 'white' }),
            React.createElement(Text, { variant: 'button', marginLeft: spacings.xs }, text))));
}
//# sourceMappingURL=UploadButton.js.map