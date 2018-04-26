exports.formatCurrency = function (numVal) {
  return isNaN(parseFloat(numVal)) ? '$0.00' : parseFloat(numVal).toLocaleString('en-AU', {style: 'currency', currency: 'USD'});
};

exports.formatCurrencyNum = function (numVal) {
  return isNaN(parseFloat(numVal)) ? '0.00' : parseFloat(numVal).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};
