module.exports = function simplyFormatCurrency (numVal) {
  return isNaN(parseFloat(numVal)) ? '$0.00' : parseFloat(numVal).toLocaleString('en-AU', {style: 'currency', currency: 'USD'});
};
