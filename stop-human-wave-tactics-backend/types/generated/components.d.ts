import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 30;
        maxLength: 500;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    metaRobots: Attribute.String &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'copy';
        };
      }>;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'copy';
        };
      }>;
    canonicalURL: Attribute.String &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'copy';
        };
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
