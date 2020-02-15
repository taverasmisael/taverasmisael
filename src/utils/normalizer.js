import { paramCase as kebabCase } from 'change-case'
/**
 * A function to normalize strings with spaces and accents to a valid URL
 * @param {String} tag The tag that can be any Latin string containing space
 * @returns {String} The formated string as a valid URL text
 * @example
 * // returns 'recomendacion-de-hoy'
 * normalizeTag('Recomendación de hoy')
 */
export const normalizeTag = tag =>
  kebabCase(tag.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))

const NO_A_LETTER = /\W/
/**
 * This function takes a limit and returns a function that takes an string
 * and limits the amount of words to the passed limit
 * @param {Number} limit The amount of words allowd
 *
 * @returns {Function} a function that takes the string to truncate
 */
export const truncateText = limit =>
  /**
   * This function takes a string and limits the amount of words on it adding
   * three suspensive dots at the end.
   * @param {String} text The amount of words allowd
   *
   * @returns {String} the new truncated string
   */
  text => {
    const TRUNCATE = text
      .split('')
      .slice(0, limit)
      .join('')
    const LAST_INDEX = TRUNCATE.length - 1
    if (NO_A_LETTER.test(TRUNCATE[LAST_INDEX])) {
      return TRUNCATE.slice(0, LAST_INDEX) + '...'
    }

    return TRUNCATE + '...'
  }
