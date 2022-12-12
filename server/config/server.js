module.exports = ({ env }) => ({
  url: env('URL', ''),
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
