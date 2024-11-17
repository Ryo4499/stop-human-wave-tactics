import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useAudio } from './useAudio';
import { MorseCodeState, MorseCodeHandlers } from "../types/morse";
import { englishMorseCode, japaneseMorseCode } from '../lib/morse-code';
import { useLocale } from "../lib/locale"

type TimeoutHandle = ReturnType<typeof setTimeout>;

export const useMorseCode = (): [MorseCodeState, MorseCodeHandlers] => {
    const { locale } = useLocale();
    const [state, setState] = useState<MorseCodeState>({
        morseInput: "",
        currentLetter: "",
        result: "",
        dotDuration: 250,
        charGap: 500,
        wordGap: 1000,
        isJapanese: locale === "ja",
    });

    const { startTone, stopTone } = useAudio();
    const isTouchActiveRef = useRef(false);
    const touchTimeoutRef = useRef<TimeoutHandle | null>(null);
    const pressStartTime = useRef<number>(0);

    /*
    * モールス信号の入力を解析して結果を更新する
    */
    const updateResult = useCallback(() => {
        // 入力が空の場合は結果も空にする
        if (!state.morseInput.trim()) {
            setState(prev => ({ ...prev, result: "" }));
            return;
        }

        const morseCode = state.isJapanese ? japaneseMorseCode : englishMorseCode;
        const decoded = state.morseInput
            .trim()
            .split(" ")
            .map((code) => morseCode[code] || "?")
            .join("");
        setState(prev => ({ ...prev, result: decoded }));
    }, [state.morseInput, state.isJapanese]);

    /*
    * モールス信号の入力を追加する
    */
    const addLetter = useCallback(() => {
        if (state.currentLetter) {
            setState(prev => ({
                ...prev,
                morseInput: prev.morseInput + prev.currentLetter + " ",
                currentLetter: ""
            }));
        }
    }, [state.currentLetter]);

    /*
    * モールス信号の入力を開始する
    */
    const startPress = useCallback((e: React.TouchEvent | React.MouseEvent) => {
        if ('touches' in e) {
            e.preventDefault();
        }

        if (isTouchActiveRef.current) {
            return;
        }

        isTouchActiveRef.current = true;
        pressStartTime.current = new Date().getTime();
        startTone();

        touchTimeoutRef.current = setTimeout(() => {
            if (isTouchActiveRef.current) {
                endPress(e);
            }
        }, 5000);
    }, []);

    /*
    * モールス信号の入力を終了する
    */
    const endPress = useCallback((e: React.TouchEvent | React.MouseEvent) => {
        if ('touches' in e) {
            e.preventDefault();
        }

        if (!isTouchActiveRef.current) {
            return;
        }

        isTouchActiveRef.current = false;

        if (touchTimeoutRef.current) {
            clearTimeout(touchTimeoutRef.current);
            touchTimeoutRef.current = null;
        }

        const duration = new Date().getTime() - pressStartTime.current;
        setState(prev => {
            let newCurrentLetter = prev.currentLetter;
            if (duration > prev.wordGap) {
                newCurrentLetter += ' / ';
            } else if (duration > prev.charGap) {
                newCurrentLetter += ' ';
            }
            newCurrentLetter += (duration < prev.dotDuration ? "." : "-");
            return { ...prev, currentLetter: newCurrentLetter };
        });

        stopTone();

        setTimeout(() => {
            isTouchActiveRef.current = false;
        }, 50);
    }, [state.dotDuration, state.charGap, state.wordGap]);

    /*
    * モールス信号の入力をリセットする
    */
    const resetInput = useCallback(() => {
        setState(prev => ({
            ...prev,
            morseInput: "",
            currentLetter: "",
            result: ""
        }));
    }, []);

    /*
        * モールス信号の入力が変更された場合に結果を更新する
        */
    useEffect(() => {
        updateResult();
    }, [state.morseInput, updateResult]);

    /*
    * モールス信号の入力が変更された場合に文字を追加する
    */
    useEffect(() => {
        const timer = setTimeout(addLetter, state.dotDuration * 3);
        return () => clearTimeout(timer);
    }, [state.currentLetter, addLetter, state.dotDuration]);

    /*
    * モールス信号の入力が変更された場合に文字を追加する
    */
    const handlers: MorseCodeHandlers = {
        startPress,
        endPress,
        resetInput,
        setDotDuration: (duration: number) => setState(prev => ({ ...prev, dotDuration: duration })),
        setCharGap: (gap: number) => setState(prev => ({ ...prev, charGap: gap })),
        setWordGap: (gap: number) => setState(prev => ({ ...prev, wordGap: gap })),
        setIsJapanese: (isJapanese: boolean) => setState(prev => ({ ...prev, isJapanese }))
    };

    return [state, handlers];
};