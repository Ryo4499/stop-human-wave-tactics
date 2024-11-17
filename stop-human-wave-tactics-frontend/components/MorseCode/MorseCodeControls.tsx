import React from 'react';
import { Grid, Typography, Switch, Box, Slider } from '@mui/material';
import { useLocale } from '../../lib/locale';
import { MorseCodeState, MorseCodeHandlers } from '../../types/morse';

interface MorseCodeControlsProps {
    state: MorseCodeState;
    handlers: MorseCodeHandlers;
}

export const MorseCodeControls: React.FC<MorseCodeControlsProps> = ({ state, handlers }) => {
    const { t } = useLocale();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                    {t.japanese_mode}
                </Typography>
                <Switch
                    color="primary"
                    checked={state.isJapanese}
                    onChange={(e) => handlers.setIsJapanese(e.target.checked)}
                />
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography color="text.secondary" gutterBottom>
                        {t.dot_duration}: {state.dotDuration}ms
                    </Typography>
                    <Slider
                        color="primary"
                        value={state.dotDuration}
                        onChange={(_, value) => handlers.setDotDuration(value as number)}
                        aria-labelledby="dot-duration-slider"
                        valueLabelDisplay="auto"
                        sx={{ width: "70%" }}
                        marks
                        step={10}
                        min={150}
                        max={350}
                    />
                    <Typography color="text.secondary" gutterBottom>{t.character_gap}: {state.charGap}ms</Typography>
                    <Slider
                        value={state.charGap}
                        onChange={(_, value) => handlers.setCharGap(value as number)}
                        valueLabelDisplay="auto"
                        marks
                        step={100}
                        min={100}
                        max={1000}
                    />
                    <Typography color="text.secondary" gutterBottom>{t.word_gap}: {state.wordGap}ms</Typography>
                    <Slider
                        value={state.wordGap}
                        onChange={(_, value) => handlers.setWordGap(value as number)}
                        valueLabelDisplay="auto"
                        marks
                        step={100}
                        min={500}
                        max={2000}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};