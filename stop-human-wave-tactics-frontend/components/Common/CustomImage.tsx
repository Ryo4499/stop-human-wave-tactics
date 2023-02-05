import React from 'react'
import Image from 'next/image'
import Grid from "@mui/material/Unstable_Grid2"
import path from "path"
import { getBackendURL, getProxyURL } from '../../lib/graphqlClient'

interface CustomImage {
    src: string
    alt: string
    width: number
    height: number
}
const CustomImage: React.FC<CustomImage> = props => {
    return <Grid container sx={{ position: "relative" }}><Image src={props.src} width={props.width ? props.width : 1} height={props.height ? props.height : 1} alt={props.alt} style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></Grid>
}
export default CustomImage
