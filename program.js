import { convert } from "./src/converter.js";
import { loadRates } from "./src/rateProvider.js";
import { formatResult } from "./src/formatter.js";

function main() {
  try {
    const { amount, from, to } = parseArgs(process.argv);

    const { base, rates, decimals } = loadRates();

    const result = convert(amount, from, to, rates, base);

    const output = formatResult(amount, from, result, to, decimals);

    console.log(output);
    
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

function parseArgs(argv) {
  const [ nodePath, filePath, rawAmount, fromCurrency, separator, toCurrency] = argv;
  
  if (argv.length !== 6) {
    throw new Error("Usage: node program.js <amount> <from> to <to>");
  }

  if (separator?.toLowerCase() !== "to") {
    throw new Error('Missing "to" separator. Usage: node program.js <amount> <from> to <to>');
  }

  const amount = parseFloat(rawAmount);
  if (isNaN(amount) || amount < 0) {
    throw new Error(`Invalid amount: "${rawAmount}". Must be a positive number.`);
  }

  const from = fromCurrency?.toUpperCase();
  const to = toCurrency?.toUpperCase();

  if (!from || !to) {
    throw new Error("Currency codes cannot be empty");
  }

  return { amount, from, to };
}

main();