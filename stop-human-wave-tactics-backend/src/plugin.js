module.exports = ({ env }) => ({
    ckeditor: {
        enabled: true,
        resolve: "./src/plugins/strapi-plugin-ckeditor"
    },
    uuid: {
        enabled: true,
        resolve: "./src/plugins/uuid"
    }
});