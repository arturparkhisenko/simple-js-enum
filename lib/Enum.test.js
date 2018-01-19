import Enum from './Enum.js';

test('Enum from array', () => {
  const enumFromArray = new Enum(['One', 'Two', 'Three']);

  describe('Access', () => {
    expect(enumFromArray['One']).toBe(0);
    expect(enumFromArray.Two).toBe(1);
    expect(enumFromArray.Three).toBe(2);
  });

  describe('Revert acces', () => {
    expect(enumFromArray[0]).toBe('One');
    expect(enumFromArray[1]).toBe('Two');
    expect(enumFromArray[2]).toBe('Three');
  });

  describe('property: numbers', () => {
    expect(enumFromArray.numbers).toEqual([0, 1, 2]);
  });

  describe('property: values', () => {
    expect(enumFromArray.values).toEqual(['One', 'Two', 'Three']);
  });
  
});

test('Enum from object', () => {
  const enumFromObject = new Enum({
    Binary: 2,
    Decimal: 10,
    'Hex': 16
  });
    
  describe('Access', () => {
    expect(enumFromObject['Binary']).toBe(2);
    expect(enumFromObject.Decimal).toBe(10);
    expect(enumFromObject.Hex).toBe(16);
  });

  describe('Revert acces', () => {
    expect(enumFromObject[2]).toBe('Binary');
    expect(enumFromObject[10]).toBe('Decimal');
    expect(enumFromObject[16]).toBe('Hex');
  });

  describe('property: numbers', () => {
    expect(enumFromObject.numbers).toEqual([2, 10, 16]);
  });

  describe('property: values', () => {
    expect(enumFromObject.values).toEqual(['Binary', 'Decimal', 'Hex']);
  });
});

test('Frozen mode', () => {
  const frozenEnum = new Enum(['A', 'B']);
  expect(() => frozenEnum.C = 2).toThrow();

  const notFrozenEnum = new Enum(['A', 'B'], { frozen: false });
  expect(() => notFrozenEnum.A = 11).not.toThrow();
})