import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useAudio } from './useAudio';
import { MorseCodeState, MorseCodeHandlers } from "../types/morse";
import { englishMorseCode, japaneseMorseCode } from '../lib/morse-code';
import { useLocale } from "../lib/locale"

type TimeoutHandle = ReturnType<typeof setTimeout>;

export const useMorseCode = (): [MorseCodeState, MorseCodeHandlers] => {
    const { locale } = useLocale();
    const defaultDotDuration = 250;
    const [state, setState] = useState<MorseCodeState>({
        morseInput: "",
        currentLetter: "",
        result: "",
        dotDuration: defaultDotDuration,
        charGap: defaultDotDuration * 3,
        wordGap: defaultDotDuration * 7,
        isJapanese: locale === "ja",
    });

    const { startTone, stopTone } = useAudio();
    const isActiveRef = useRef(false);
    const timeoutRef = useRef<TimeoutHandle | null>(null);
    const pressStartTime = useRef<number>(0);

    // 強化されたクリーンアップ関数
    const cleanup = useCallback((forceStop: boolean = true) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        if (forceStop || isActiveRef.current) {
            stopTone();
        }
        isActiveRef.current = false;
    }, [stopTone]);

    // 複数のクリーンアップイベントを監視
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                cleanup(true);
            }
        };

        const handleBlur = () => {
            cleanup(true);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('blur', handleBlur);
        window.addEventListener('beforeunload', () => cleanup(true));

        return () => {
            cleanup(true);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('blur', handleBlur);
        };
    }, [cleanup]);

    const updateResult = useCallback(() => {
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

    const addLetter = useCallback(() => {
        if (state.currentLetter) {
            setState(prev => ({
                ...prev,
                morseInput: prev.morseInput + prev.currentLetter + " ",
                currentLetter: ""
            }));
        }
    }, [state.currentLetter]);

    // 押下開始処理の改善
    const startPress = useCallback((e: React.PointerEvent) => {
        e.preventDefault();

        // 既にアクティブな場合は確実にクリーンアップ
        if (isActiveRef.current) {
            cleanup(true);
            return; // 連続した押下を防止
        }

        isActiveRef.current = true;
        pressStartTime.current = Date.now();
        startTone();

        // 安全タイマーの設定
        timeoutRef.current = setTimeout(() => {
            cleanup(true);
        }, 3000); // 最大押下時間を3秒に制限
    }, [cleanup, startTone]);

    // 押下終了処理の改善
    const endPress = useCallback((e: React.PointerEvent) => {
        e.preventDefault();

        if (!isActiveRef.current) return;

        const duration = Date.now() - pressStartTime.current;
        const isDot = duration < state.dotDuration * 1.2;

        setState(prev => ({
            ...prev,
            currentLetter: prev.currentLetter + (isDot ? "." : "-")
        }));

        // 確実にクリーンアップ
        cleanup(true);
    }, [cleanup, state.dotDuration]);

    const resetInput = useCallback(() => {
        cleanup(true);
        setState(prev => ({
            ...prev,
            morseInput: "",
            currentLetter: "",
            result: ""
        }));
    }, [cleanup]);

    useEffect(() => {
        updateResult();
    }, [state.morseInput, updateResult]);

    useEffect(() => {
        if (!state.currentLetter) return;

        const timer = setTimeout(addLetter, state.dotDuration * 3);
        return () => clearTimeout(timer);
    }, [state.currentLetter, addLetter, state.dotDuration]);

    const setDotDuration = useCallback((duration: number) => {
        setState(prev => ({
            ...prev,
            dotDuration: duration,
            charGap: duration * 3,
            wordGap: duration * 7
        }));
    }, []);

    const handlers: MorseCodeHandlers = {
        startPress,
        endPress,
        resetInput,
        setDotDuration,
        setIsJapanese: (isJapanese: boolean) => setState(prev => ({ ...prev, isJapanese }))
    };

    return [state, handlers];
};