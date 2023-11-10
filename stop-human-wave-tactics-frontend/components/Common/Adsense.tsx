import { useRouter } from 'next/router';
import { useEffect, CSSProperties } from 'react';
import Grid from "@mui/material/Unstable_Grid2"
import { GA_ID } from '../../lib/gad';

export const DefaultAdsense = ({ style, format, slot, key, fullWidth }: { style: CSSProperties, format: String, slot: String, key: String, fullWidth: boolean }) => {
    const { asPath } = useRouter();

    useEffect(() => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
                {},
            );
        } catch (error) {
            // Pass
        }
    }, [asPath]);
    return (
        <Grid key={asPath}>
            <ins className="adsbygoogle"
                style={style}
                data-adtest={String(process.env.MODE) === "DEV" ? "on" : "off"}
                data-ad-client={GA_ID}
                data-ad-layout-key={key}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={fullWidth}
            />
        </Grid>
    )
}
