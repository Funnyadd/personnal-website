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
        playgroundAlways: false,
        depthLimit: 10,
        amountLimit: 100,
        apolloServer: {
          tracing: true,
          introspection: true,
        },
      },
    },
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY')
        },
        settings: {
          defaultFrom: 'funnyadd2002@gmail.com',
          defaultReplyTo: 'funnyadd2002@gmail.com'
        }
      }
    }
});