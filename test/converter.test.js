import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { convert } from '../src/converter.js';
import { loadRates } from '../src/rateProvider.js';
import { formatResult } from '../src/formatter.js';

const { base, rates, decimals } = loadRates('./data/rates.json');

test('1000 THB to BTC', () => {
  const amount = 1000;
  const from = 'THB';
  const to = 'BTC';
  
  const result = convert(amount, from, to, rates, base);
  const formatted = formatResult(amount, from, result, to, decimals);
  
  assert.equal(formatted, '1000 THB = 0.0006 BTC');
});

test('50 USD to THB', () => {
  const amount = 50;
  const from = 'USD';
  const to = 'THB';
  
  const result = convert(amount, from, to, rates, base);
  const formatted = formatResult(amount, from, result, to, decimals);
  
  assert.equal(formatted, '50 USD = 1851.85 THB');
});

test('0.01 BTC to USD', () => {
  const amount = 0.01;
  const from = 'BTC';
  const to = 'USD';
  
  const result = convert(amount, from, to, rates, base);
  const formatted = formatResult(amount, from, result, to, decimals);
  
  assert.equal(formatted, '0.01 BTC = 450 USD');
});
