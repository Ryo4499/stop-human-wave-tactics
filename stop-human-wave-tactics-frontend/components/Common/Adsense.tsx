import Grid from "@mui/material/Unstable_Grid2";
import { FC, CSSProperties, useEffect } from 'react';
import { useRouter } from 'next/router';
import { prod } from '../../lib/graphqlClient';
import { getGadId } from '../../lib/google';

interface AdsenseProps {
    style: CSSProperties;
    slot: string;
    format?: string;
    fullWidth?: "true" | "false";
    adStatus?: "filled" | "unfilled";
    key?: string;
}

export const Adsense: FC<AdsenseProps> = ({ style, slot, format, fullWidth, adStatus, key }) => {
    const { asPath } = useRouter();

    useEffect(() => {
        try {
            ; (window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (err) {
            console.log(err)
        }
    }, [asPath])

    return (
        <Grid className="adsbygoogle" justifyContent="center" container my={2} xs={12} key={asPath}>
            <ins
                className='adsbygoogle'
                style={style}
                data-adtest={prod ? 'off' : 'on'}
                data-ad-format={format}
                data-ad-client={getGadId()}
                data-ad-layout-key={key}
                data-ad-slot={slot}
                data-ad-status={adStatus}
                data-full-width-responsive={fullWidth}
            />
        </Grid>
    )
}