const formatCurrency = (currency) => {
	return "Ksh " + Number(currency.toFixed(2)).toLocaleString() + " ";
};

export default formatCurrency;
