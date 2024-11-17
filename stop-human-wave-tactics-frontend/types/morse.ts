import React from 'react';

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
    startPress: (e: React.TouchEvent | React.MouseEvent) => void;
    endPress: (e: React.TouchEvent | React.MouseEvent) => void;
    resetInput: () => void;
    setDotDuration: (duration: number) => void;
    setCharGap: (gap: number) => void;
    setWordGap: (gap: number) => void;
    setIsJapanese: (isJapanese: boolean) => void;
}

