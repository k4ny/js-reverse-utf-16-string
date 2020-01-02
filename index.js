const MIN_HIGH_SURROGATE = '\uD800';
const MAX_HIGH_SURROGATE = '\uDBFF';
const MIN_LOW_SURROGATE = '\uDC00';
const MAX_LOW_SURROGATE = '\uDFFF';

/**
 * Reverses UTF16 string
 * @param {string} source
 * @returns {string}
 */
module.exports = function reverse(source) {
    const array = source.split('');

    let result = [];
    for (i = array.length - 1; i >= 0; i--) {
        if (array[i] >= MIN_LOW_SURROGATE && array[i] <= MAX_LOW_SURROGATE) {
            result.push(array[i - 1]);
            result.push(array[i]);
            i--;
        } else {
            result.push(array[i]);
        }
    }

    return result.join('');
}