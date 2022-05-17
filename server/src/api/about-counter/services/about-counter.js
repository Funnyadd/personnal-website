'use strict';

/**
 * about-counter service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-counter.about-counter');
