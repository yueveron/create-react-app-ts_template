import { sum } from '../../../utils/tools';
test('test sum', () => {
  const resultSum = sum(1, 2);
  expect(resultSum).toBe(3);
});
