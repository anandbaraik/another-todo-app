import { sum } from './sum';
import { expect, test } from 'vitest';
test('add  1+2 equals to 3', () => {
    expect(sum(1, 2)).toBe(3);
});
