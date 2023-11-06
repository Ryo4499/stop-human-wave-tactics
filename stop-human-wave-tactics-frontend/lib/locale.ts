import { useRouter } from 'next/router'
import en from "./locales/en.json"
import ja from "./locales/ja.json"

export const useLocale = () => {
    /**
     * 現在のロケールを返す
     */
    const { locale, locales } = useRouter();
    const t = locale === "en" ? en : ja;
    return { locale, locales, t };
}