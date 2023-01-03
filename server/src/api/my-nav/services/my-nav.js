'use strict';

/**
 * my-nav service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-nav.my-nav');
