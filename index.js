exports.formatCurrency = function (numVal) {
  return isNaN(parseFloat(numVal)) ? '$0.00' : parseFloat(numVal).toLocaleString('en-AU', {style: 'currency', currency: 'USD'});
};

exports.formatCurrencyNum = function (numVal) {
  return isNaN(parseFloat(numVal)) ? '0.00' : parseFloat(numVal).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};

exports.formatQuantityNum = function (numVal) {
  return isNaN(parseFloat(numVal)) ? '0' : parseFloat(numVal).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};

exports.round2(value) {
	return Number(Math.round(value+'e2')+'e-2');
}

exports.round3(value) {
	return Number(Math.round(value+'e3')+'e-3');
}

exports.toCurrency(numVal) {
	return isNaN(parseFloat(numVal)) ? '$0.00' : parseFloat(numVal).toLocaleString('en-AU', {style: 'currency', currency: 'AUD'});
}

exports.toCurrencyNum(numVal) {
	return isNaN(parseFloat(numVal)) ? '0.00' : parseFloat(numVal).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

exports.toQuantityNum(numVal) {
	return isNaN(parseFloat(numVal)) ? '0' : parseFloat(numVal).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

exports.toWeightNum(numVal) {
	return isNaN(parseFloat(numVal)) ? '0.000' : parseFloat(numVal).toFixed(3).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
