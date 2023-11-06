import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Grid from "@mui/material/Unstable_Grid2"
import { GA_ID, GA_SLOT } from '../../lib/gad';

export const DefaultAdsense = () => {
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
                style={{ display: "block" }}
                data-adtest={process.env.MODE === "DEV" ? "on" : "off"}
                data-ad-client={GA_ID}
                data-ad-slot={GA_SLOT}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </Grid>
    )
}
