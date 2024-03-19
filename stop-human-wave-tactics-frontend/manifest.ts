import { MetadataRoute } from "next"

export default (): MetadataRoute.Manifest => {
    return {
        "name": "stop-human-wave-tactics",
        "short_name": "shwt",
        "description": "An application built",
        "start_url": "/",
        "display": "standalone",
        "icons": [
            {
                "src": "/favicon.ico",
                "sizes": "any",
                "type": "image/x-icon"
            },
            {
                "src": "/favicon_16x16.jpg",
                "sizes": "16x16",
                "type": "image/jpg"
            },
            {
                "src": "/favicon_32x32.jpg",
                "sizes": "32x32",
                "type": "image/jpg"
            },
            {
                "src": "/favicon_150x150.jpg",
                "sizes": "150x150",
                "type": "image/jpg"
            },
            {
                "src": "/favicon_192x192.jpg",
                "sizes": "192x192",
                "type": "image/jpg"
            },
            {
                "src": "/favicon_512x512.jpg",
                "sizes": "512x512",
                "type": "image/jpg"
            }
        ]
    }
}