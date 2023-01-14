import crypto from 'crypto';
import { ApplicationError } from "@strapi/utils"

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
    debugger

    //Generate UUID for en locale only
    if (!data.uuid && data.title && locale == DEFAULT_LOCALE) {
        event.params.data.uuid = crypto.randomUUID()
    }

    if (!data.uuid) {
        throw new ApplicationError("UUID is required!");
    }
};

const getLocale = async (id: string) => {
    const res = await strapi.service("api::category:category").findOne(id, {});
    return res.locale;
};
