import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";

interface CustomImageInterface {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CustomImage: React.FC<CustomImageInterface> = (props) => {
  return (
    <Grid container sx={{ position: "relative" }}>
      <Image
        src={props.src}
        priority={true}
        className="nextimage"
        fill
        alt={props.alt}
        sizes="(max-width: 1080px) 100vw, (max-width: 1920px) 50vw, 33vw"
      />
    </Grid>
  );
};
export default CustomImage;
