import React from 'react'
import Image from 'next/image'
import Grid from "@mui/material/Unstable_Grid2"

interface CustomImage {
    src: string
    alt: string
    width: number
    height: number
}
const CustomImage: React.FC<CustomImage> = props => {
    return <Grid container sx={{ position: "relative" }}>
        <Image src={props.src} className="nextimage" fill alt={props.alt} />
    </Grid>
}
export default CustomImage
