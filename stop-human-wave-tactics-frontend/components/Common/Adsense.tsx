import { useRouter } from 'next/router';
import { useRef, useEffect, CSSProperties } from 'react';
import Grid from "@mui/material/Unstable_Grid2"
import { getMode } from '../../lib/graphqlClient';
import { getGaId } from '../../lib/google';

export const DefaultAdsense = ({ style, format, slot, key, fullWidth }: { style: CSSProperties, format: String, slot: String, key: String, fullWidth: boolean }) => {
    const router = useRouter();
    const adsLoaded = useRef<any>(false);

    useEffect(() => {
        const loadAd = () => {
            if (typeof window !== "undefined" && (window as any).adsbygoogle) {
                (window as any).adsbygoogle = (window as any).adsbygoogle || [];
                (window as any).adsbygoogle.push({});
                adsLoaded.current = true;
            }
        };

        if (router.query && !adsLoaded.current) {
            setTimeout(loadAd, 0);
        }
    }, [router.query]);
    return (
        <Grid key={router.asPath} container direction="column" my={2} xs={12} sx={{ flexGrow: 1, height: "100%" }}>
            <ins className="adsbygoogle"
                style={style}
                data-adtest={getMode() === "PRODUCTION" ? "off" : "on"}
                data-ad-client={getGaId()}
                data-ad-layout-key={key}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={fullWidth}
            />
        </Grid>
    )
}
