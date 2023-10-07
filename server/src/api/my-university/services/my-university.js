'use strict';

/**
 * my-university service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-university.my-university');
