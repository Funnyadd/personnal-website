'use strict';

/**
 *  my-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::my-service.my-service');
