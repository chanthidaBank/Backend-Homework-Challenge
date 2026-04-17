export function formatResult(amount, from, result, to, decimalsConfig = {}) {
  const decimals = getDecimalPlaces(to, result, decimalsConfig);
  const formattedResult = result.toFixed(decimals);
  return `${amount} ${from} = ${formattedResult} ${to}`;
}

function getDecimalPlaces(currency, value, decimalsConfig) {
  if (decimalsConfig[currency] !== undefined) {
    return decimalsConfig[currency];
  }
  
  if (value < 0.01) {
    return 8;
  } else if (value < 1) {
    return 5;
  } else {
    return 2;
  }
}