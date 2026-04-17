export function convert(amount, from, to, rates, base) {
  if (!rates[from]) {
    throw new Error(`Unsupported currency: ${from}`);
  }
  if (!rates[to]) {
    throw new Error(`Unsupported currency: ${to}`);
  }

  // convert to base first
  const amountInBase = amount / rates[from];

  // then base → target
  const result = amountInBase * rates[to];

  return result;
}