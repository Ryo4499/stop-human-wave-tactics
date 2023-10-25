import React from 'react'
import Link from 'next/link'
import { Typography } from '@mui/material'
const CustomLink: React.FC<{ href: string, children: any, id: string, className: string }> = ({ href, children, id, className }) => {
    const isMyPageLink = href.startsWith("/") || href.startsWith("#") || href === ""
    return isMyPageLink ? (
        <Link href={href} id={id} className={className} color="text.link" >
            {children}
        </Link>
    ) : (
        <a href={href} target="_blank" rel="noopener noreferrer nofollow" id={id} className={className}>
            <Typography color="text.link">
                {children}
            </Typography>
        </a >
    )
}
export default CustomLink