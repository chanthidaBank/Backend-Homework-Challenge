export function formatResult(amount, from, result, to) {
  const decimals = getDecimalPlaces(to);
  const formattedResult = result.toFixed(decimals);
  return `${amount} ${from} = ${formattedResult} ${to}`;
}

function getDecimalPlaces(currency) {
  const decimalConfig = {
    'BTC': 8,
    'THB': 2,
    'USD': 2,
    'EUR': 2
  };
  return decimalConfig[currency] || 2;
}