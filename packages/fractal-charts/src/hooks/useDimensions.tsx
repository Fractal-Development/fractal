import { Dispatch, SetStateAction, useState } from 'react';
import { DimensionsType } from '../types';

export function useDimensions(): [DimensionsType, Dispatch<SetStateAction<DimensionsType>>] {
    return useState({ width: 0, height: 0 });
}
