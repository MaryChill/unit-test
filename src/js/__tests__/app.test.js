import checkHealth from '../app';

test.each([
  ['Маг', 100, 'healthy'],
  ['Маг', 30, 'wounded'],
  ['Маг', 10, 'critical'],
])('testing %s with health %i', (_, healthValue, expended) => {
  const value = { name: 'Маг', health: healthValue };
  const result = checkHealth(value);
  expect(result).toBe(expended);
});
