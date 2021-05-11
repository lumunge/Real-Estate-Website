const formatCurrency = (curr) => {
    return "Ksh " + Number(curr.toFixed(2)).toLocaleString() + " ";
}

export default formatCurrency;