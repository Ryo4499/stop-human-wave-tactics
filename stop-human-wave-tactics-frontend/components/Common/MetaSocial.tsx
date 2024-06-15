import { ReactNode } from 'react';

interface Props {
    sns?: string
    title?: string
    description?: string
    image?: string
}

export const MetaSocial = ({ sns, title, description, image }: Props): ReactNode => {
    if (sns) {
        return <>
            <meta property={`${sns}:title`} content={title} key={`${sns} title`} />
            <meta property={`${sns}:description`} content={description} key={`${sns} description`} />
            <meta property={`${sns}:image`} content={image} key={`${sns} image`} />
        </>
    } else {
        return null
    }
}