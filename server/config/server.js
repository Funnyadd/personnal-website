module.exports = ({ env }) => ({
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
