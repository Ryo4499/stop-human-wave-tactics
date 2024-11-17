import React from 'react';
import { Button } from '@mui/material';
import RefreshIcon from "@mui/icons-material/Refresh";
import { MorseCodeHandlers } from '../../types/morse';
import { useLocale } from '../../lib/locale';

interface MorseCodeResetButtonProps {
    handlers: MorseCodeHandlers;
}

export const MorseCodeResetButton: React.FC<MorseCodeResetButtonProps> = ({ handlers }) => {
    const { t } = useLocale();
    return (
        <Button
            variant="contained"
            startIcon={<RefreshIcon />}
            onClick={handlers.resetInput}
            sx={{ mx: 1 }}
        >
            {t.reset}
        </Button>
    )
}