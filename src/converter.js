export function convert(amount, from, to, rates, base) {
  if (!rates[from]) {
    throw new Error(`Unsupported currency: ${from}`);
  }
  if (!rates[to]) {
    throw new Error(`Unsupported currency: ${to}`);
  }

  const amountInBase = amount * rates[base] / rates[from];

  const result = amountInBase * rates[to] / rates[base];
 
  return result;
}