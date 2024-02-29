import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedDownloadButton extends Schema.Component {
  collectionName: 'components_shared_download_buttons';
  info: {
    displayName: 'Download Button';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedMap extends Schema.Component {
  collectionName: 'components_shared_maps';
  info: {
    displayName: 'Map';
  };
  attributes: {
    city: Attribute.String;
    Province: Attribute.String;
    Country: Attribute.String;
    language: Attribute.String;
    z_index: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 8;
          max: 20;
        },
        number
      > &
      Attribute.DefaultTo<10>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.download-button': SharedDownloadButton;
      'shared.map': SharedMap;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
    }
  }
}
