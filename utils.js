const { paramCase: kebabCase } = require('change-case')
/**
 * A function to normalize strings with spaces and accents to a valid URL
 * @param {String} tag The tag that can be any Latin string containing space
 * @returns {String} The formated string as a valid URL text
 * @example
 * // returns 'recomendacion-de-hoy'
 * normalizeTag('Recomendación de hoy')
 */
module.exports = {
  normalizeTag: tag =>
    kebabCase(tag.normalize('NFD').replace(/[\u0300-\u036f]/g, '')),
}
