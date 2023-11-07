export const GA_TRACKING_ID = String(process.env.GTAG)

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  globalThis.window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
