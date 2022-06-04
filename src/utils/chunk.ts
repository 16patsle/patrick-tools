/**
 * Based on lodash.chunk 4.2.0
 * https://github.com/lodash/lodash/blob/4.2.0-npm-packages/lodash.chunk/index.js
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param array The array to slice.
 * @param start The start position.
 * @param end The end position.
 * @returns Returns the slice of `array`.
 */
function baseSlice<T>(
  array: T[],
  start: number = 0,
  end: number = array.length
): T[] {
  var index = -1,
    length = array.length

  if (start < 0) {
    start = -start > length ? 0 : length + start
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : (end - start) >>> 0
  start >>>= 0

  var result = Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @param array The array to process.
 * @param size The length of each chunk
 * @returns Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk<T>(array: T[], size: number = 1): T[][] {
  size = Math.max(size, 0)

  var length = array ? array.length : 0
  if (!length || size < 1) {
    return []
  }
  var index = 0,
    resIndex = 0,
    result = Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size))
  }
  return result
}

export { chunk }
