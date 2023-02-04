import React from 'react'
import Link from 'next/link'
const CustomLink: React.FC<{ href: string, children: any, id: string, className: string }> = ({ href, children, id, className }) => {
    const isMyPageLink = href.startsWith("/") || href.startsWith("#") || href === ""
    return isMyPageLink ? (
        <Link href={href} id={id} className={className} >
            {children}
        </Link>
    ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" id={id} className={className}>
            {children}
        </a>
    )
}
export default CustomLink