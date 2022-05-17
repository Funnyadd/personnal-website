'use strict';

/**
 * my-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-service.my-service');
