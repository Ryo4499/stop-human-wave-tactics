import { useRef, useEffect } from 'react';

export const useAudio = () => {
    const audioContext = useRef<AudioContext | null>(null);
    const oscillator = useRef<OscillatorNode | null>(null);

    const startTone = () => {
        if (!audioContext.current) {
            audioContext.current = new (window.AudioContext ||
                (window as any).webkitAudioContext)();
        }
        oscillator.current = audioContext.current.createOscillator();
        oscillator.current.type = "sine";
        oscillator.current.frequency.setValueAtTime(
            600,
            audioContext.current.currentTime,
        );
        oscillator.current.connect(audioContext.current.destination);
        oscillator.current.start();
    };

    const stopTone = () => {
        if (oscillator.current) {
            oscillator.current.stop();
            oscillator.current = null;
        }
    };

    useEffect(() => {
        return () => {
            stopTone();
        };
    }, []);

    return { startTone, stopTone };
};