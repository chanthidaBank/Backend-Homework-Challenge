import fs from "fs";

export function loadRates() {

  const rawData = fs.readFileSync("./data/rates.json", "utf8");
  const data = JSON.parse(rawData);
 
  return {
    base: data.base,
    rates: data.rates,
    decimals: data.decimals || {}
  };
}