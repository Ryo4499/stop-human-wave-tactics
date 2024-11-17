import React from 'react';
import { Button } from '@mui/material';
import { MorseCodeHandlers } from '../../types/morse';

interface MorseCodeButtonProps {
    handlers: MorseCodeHandlers;
}

export const MorseCodeButton: React.FC<MorseCodeButtonProps> = ({ handlers }) => {
    const { startPress, endPress } = handlers;

    return (
        <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
                width: "9rem",
                height: "9rem",
                borderRadius: "20%",
                fontSize: "1.2rem",
                touchAction: "none",
                userSelect: "none",
                WebkitTapHighlightColor: "transparent",
            }}
            onTouchStart={startPress}
            onTouchEnd={endPress}
            onTouchCancel={endPress}
            onMouseDown={(e) => {
                if (!('touches' in e)) startPress(e);
            }}
            onMouseUp={(e) => {
                if (!('touches' in e)) endPress(e);
            }}
        />
    );
};