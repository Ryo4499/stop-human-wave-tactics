export const adsenseEnabled = () =>
  process.env.GOOGLE_ADSENSE_ENABLED === "true";
export const getGanId = () => process.env.NEXT_PUBLIC_GAN_ID || "";
export const getGadId = () => process.env.NEXT_PUBLIC_GAD_ID || "";
export const getGtmId = () => process.env.NEXT_PUBLIC_GTM_ID || "";
