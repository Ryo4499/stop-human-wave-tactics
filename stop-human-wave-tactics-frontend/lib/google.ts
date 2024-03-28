export const adsenseEnabled = () => process.env.GOOGLE_ADSENSE_ENABLED === "true"
export const getGtag = () => process.env.NEXT_PUBLIC_GTAG || ""
export const getGaId = () => process.env.NEXT_PUBLIC_GA_ID || ""
export const getGtmId = () => process.env.NEXT_PUBLIC_GTM_ID || ""