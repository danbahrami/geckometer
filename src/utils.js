/**
 * getPercentage returns a percentage representing where a value
 * sits in the range defined by a min and max value. If the
 * minimum where always zero this would simply be a case
 * of calculating the percentage that the value is of
 * the max (i.e (value / max) * 100) but this func
 * takes into account that min is not fixed.
 *
 * Example getPercentage(100, 200, 57) = 57
 *
 * @param {number} min - The lowest possible number in the range
 * @param {number} max - The highest possible number in the range
 * @param {number} value - The value
 *
 * @returns {number} The percentage as an integer between including 0 and 100
 */
export const getPercentage = (min, max, value) => {
    //Get the total difference between min and max
    const totalDifference = max - min;

    //If min is higher than max then use max as the source of truth
    if(totalDifference <= 0) {
        return value < max ? 0 : 100;
    }

    //Coerce value to sit between max and min values
    value = Math.max(Math.min(max, value), min);

    //Return the value percentage
    return Math.round(((value - min) / totalDifference) * 100);
};

/**
 * formatCurrencyString accepts a value and a currency 
 * code and returns a formatted string containing 
 * the value prefixed by the currency symbol.
 * 
 * @param {number} value - the value to format
 * @param {string} currencyCode - The 3 character currency code (e.g. "USD")
 */
export const formatCurrencyString = (value, currencyCode) => {
    const symbolMap = {
        "GBP" : "£",
        "USD" : "$",
        "CHF" : "CHF",
        "EUR" : "€"
    };

    //If currencyCode is a supported currency prefix the value with the currency symbol
    if(Object.keys(symbolMap).indexOf(currencyCode) !== -1) {
        return symbolMap[currencyCode] + value.toString();
    }

    //Else return the value as a string
    return value.toString();
};