import { ApplicationError } from "@strapi/utils"
import crypto from "crypto"

export default {
    async beforeCreate(event) {
        await generateUUID(event);
    },

    async beforeUpdate(event) {
        await generateUUID(event);
    },
};

const generateUUID = async (event: any) => {
    const DEFAULT_LOCALE = "ja";
    const { data } = event.params;
    const id = event.params?.where?.id ?? null;
    const locale = !id ? DEFAULT_LOCALE : await getLocale(id);

    //Generate uuid for default locale only
    if (!data.uuid && locale == DEFAULT_LOCALE) {
        event.params.data.uuid = crypto.randomUUID()
    }

    if (!data.uuid) {
        throw new ApplicationError("UUID is required!");
    }
};

const getLocale = async (id: string) => {
    const res = await strapi.service("api::article:article").findOne(id, {});
    return res.locale;
};
