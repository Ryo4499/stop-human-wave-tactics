import { useRouter } from 'next/router';
import { useEffect, CSSProperties } from 'react';
import Grid from "@mui/material/Unstable_Grid2"
import { getMode } from '../../lib/graphqlClient';
import { getGaId } from '../../lib/google';

export const DefaultAdsense = ({ style, format, slot, key, fullWidth }: { style: CSSProperties, format: String, slot: String, key: String, fullWidth: boolean }) => {
    const { asPath } = useRouter();

    useEffect(() => {
        try {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
                {},
            );
        } catch (error) {
            // Pass
            console.error(error)
        }
    }, [asPath]);
    return (
        <Grid key={asPath} container direction="column" my={2} xs={12} sx={{ flexGrow: 1, height: "100%" }}>
            <ins className="adsbygoogle"
                style={style}
                data-adtest="on"//{getMode() === "PRODUCTION" ? "off" : "on"}
                data-ad-client={getGaId()}
                data-ad-layout-key={key}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={fullWidth}
            />
        </Grid>
    )
}
