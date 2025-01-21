module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        depthLimit: 20,
        amountLimit: 100,
        apolloServer: {
          tracing: true,
          introspection: true,
        },
      },
    },
    email: {
      config: {
        provider: 'strapi-provider-email-resend',
        providerOptions: {
          apiKey: env('RESEND_API_KEY'),
        },
        settings: {
          defaultFrom: 'noreply@adammihajlovic.ca',
          defaultReplyTo: 'noreply@adammihajlovic.ca',
        },
      }
    },
});