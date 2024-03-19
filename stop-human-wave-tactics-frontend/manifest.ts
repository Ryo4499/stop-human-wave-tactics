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
        ]
    }
}