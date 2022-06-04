/**
 * Convert first letter of a string to uppercase
 * @see https://stackoverflow.com/a/1026087
 * @param string - String to convert
 * @param locale - Optional locale, defaults to 'en-US'
 * @returns Converted string
 */
export const capitalizeFirstLetter = (
  [first, ...rest]: string,
  locale = 'en-US'
) => first.toLocaleUpperCase(locale) + rest.join('')
