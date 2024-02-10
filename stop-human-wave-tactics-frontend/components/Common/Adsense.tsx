import { useRouter } from 'next/router';
import { useEffect, CSSProperties } from 'react';
import Grid from "@mui/material/Unstable_Grid2"

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
                style={{ display: "block", textAlign: "center" }}
                data-adtest={process.env.MODE === "DEV" ? "on" : "off"}
                data-ad-client={process.env.GA_ID}
                data-ad-slot={process.env.GA_SLOT}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </Grid>
    )
}
