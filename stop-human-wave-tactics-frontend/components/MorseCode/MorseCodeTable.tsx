import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import { useLocale } from '../../lib/locale';

interface MorseCodeTableProps {
    morseCode: Record<string, string>;
}

export const MorseCodeTable: React.FC<MorseCodeTableProps> = ({ morseCode }) => {
    const { t } = useLocale();

    const chunk = <T,>(arr: T[], size: number): T[][] =>
        Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
            arr.slice(i * size, i * size + size),
        );

    return (
        <Paper elevation={3}>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell variant="head" align="justify" sx={{ fontSize: "1.0rem" }}>
                                {t.morse_code_column_char}
                            </TableCell>
                            <TableCell variant="head" align="justify" sx={{ fontSize: "1.0rem" }}>
                                {t.morse_code_column_code}
                            </TableCell>
                            <TableCell variant="head" align="justify" sx={{ fontSize: "1.0rem" }}>
                                {t.morse_code_column_char}
                            </TableCell>
                            <TableCell variant="head" align="justify" sx={{ fontSize: "1.0rem" }}>
                                {t.morse_code_column_code}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {chunk(Object.entries(morseCode), 2).map(([left, right], index) => (
                            <TableRow key={index}>
                                <TableCell align="justify" sx={{ color: "text.secondary" }}>
                                    {left[1]}
                                </TableCell>
                                <TableCell align="justify" sx={{ fontSize: "2rem", color: "text.secondary" }}>
                                    {left[0]}
                                </TableCell>
                                {right && (
                                    <>
                                        <TableCell align="justify" sx={{ color: "text.secondary" }}>
                                            {right[1]}
                                        </TableCell>
                                        <TableCell align="justify" sx={{ fontSize: "2rem", color: "text.secondary" }}>
                                            {right[0]}
                                        </TableCell>
                                    </>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};