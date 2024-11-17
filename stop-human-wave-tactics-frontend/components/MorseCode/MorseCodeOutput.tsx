import { Paper, Typography } from '@mui/material';
import { useLocale } from '../../lib/locale';
import React from 'react';

interface MorseCodeOutputProps {
    input: string;
    output: string;
}

export const MorseCodeOutput: React.FC<MorseCodeOutputProps> = ({ input, output }) => {
    const { t } = useLocale();

    return (
        <>
            <Paper elevation={3} sx={{ py: 2, width: "70%", mx: "auto", my: 2 }}>
                <Typography variant="h6" gutterBottom color="text.primary">
                    {t.morse_code_input}:
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: "2rem" }}>
                    {input}
                </Typography>
            </Paper>
            <Paper elevation={3} sx={{ py: 2, width: "70%", mx: "auto", my: 2 }}>
                <Typography variant="h6" gutterBottom color="text.primary">
                    {t.morse_code_output}:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {output}
                </Typography>
            </Paper>
        </>
    );
};