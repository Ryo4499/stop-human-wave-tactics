import React from "react";
import Link from "next/link";

const CustomLink = ({ href, children, id, className }) => {
  return (
    <Link href={href} id={id} className={className} color="text.link">
      {children}
    </Link>
  );
};
export default CustomLink;
