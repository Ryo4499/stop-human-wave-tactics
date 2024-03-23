import React from "react";
import Link from "next/link";

const CustomLink: React.FC<{
  href: string;
  children: any;
  id: string;
  className: string;
}> = ({ href, children, id, className }) => {
    
  return (
    <Link href={href} id={id} className={className} color="text.link">
      {children}
    </Link>
  );
};
export default CustomLink;
