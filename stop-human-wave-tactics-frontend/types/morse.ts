import { PointerEvent } from 'react';

export interface MorseCodeState {
    morseInput: string;
    currentLetter: string;
    result: string;
    dotDuration: number;
    charGap: number;
    wordGap: number;
    isJapanese: boolean;
}

export interface MorseCodeHandlers {
    startPress: (e: PointerEvent) => void;
    endPress: (e: PointerEvent) => void;
    resetInput: () => void;
    setDotDuration: (duration: number) => void;
    setIsJapanese: (isJapanese: boolean) => void;
}

