const defaultLocale = 'en-US';
const defaultOptions = {
  style: 'currency',
  currency: 'USD'
};

function simplyFormatCurrency (numVal, locale, opts) {
  opts = Object.assign({}, defaultOptions, opts);  
  return isNaN(parseFloat(numVal)) ? '$0.00' : parseFloat(numVal).toLocaleString(locale, opts);
}

module.exports = simplyFormatCurrency;
