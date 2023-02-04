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
    console.log(props)
    if (props.src.startsWith("/")) {
        return <Grid container sx={{ position: "relative" }}><Image src={props.src} width={props.width ? props.width : 1} height={props.height ? props.height : 1} alt={props.alt} style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></Grid>
    } else {
        return <Grid><img src={props.src} width="auto" height="auto" loading="lazy" alt={props.alt} /></Grid>
    }
}
export default CustomImage
