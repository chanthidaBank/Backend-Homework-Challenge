# Currency Converter CLI

A command-line interface (CLI) program that converts between currencies offline.

## Requirements

- Node.js v18.3 or higher

## Installation

```bash
# No installation needed - uses only Node.js built-in modules
```

## Usage

```bash
node program.js <amount> <from_currency> to <to_currency>
```

### Examples

```bash
# Convert 1000 THB to BTC
node program.js 1000 thb to btc
# Output: 1000 THB = 0.00059400 BTC

# Convert 50 USD to THB
node program.js 50 usd to thb
# Output: 50 USD = 1851.85 THB

# Convert 0.01 BTC to USD
node program.js 0.01 btc to usd
# Output: 0.01 BTC = 454.55 USD
```

## Configuration

Exchange rates are stored in `data/rates.json`:

```json
{
  "base": "USD",
  "rates": {
    "USD": 1,
    "THB": 37.037,
    "EUR": 0.92,
    "BTC": 0.000022
  }
}
```

## Testing

Run the test suite:

```bash
npm test
```

Expected output:
```
✔ 1000 THB to BTC
✔ 50 USD to THB
✔ 0.01 BTC to USD

ℹ tests 3
ℹ pass 3
ℹ fail 0
```