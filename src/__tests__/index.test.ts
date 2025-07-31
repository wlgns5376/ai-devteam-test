import { greet, add, subtract, multiply, divide } from '../index.js';

describe('greet', () => {
  it('should return greeting message with name', () => {
    expect(greet('World')).toBe('Hello, World!');
    expect(greet('TypeScript')).toBe('Hello, TypeScript!');
  });

  it('should throw error for empty name', () => {
    expect(() => greet('')).toThrow('Name cannot be empty');
    expect(() => greet('   ')).toThrow('Name cannot be empty');
  });
});

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, 20)).toBe(30);
  });

  it('should add negative numbers', () => {
    expect(add(-5, -3)).toBe(-8);
    expect(add(-10, 5)).toBe(-5);
  });

  it('should add decimal numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(add(1.5, 2.5)).toBe(4);
  });
});

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(10, 20)).toBe(-10);
  });

  it('should handle negative results', () => {
    expect(subtract(3, 5)).toBe(-2);
    expect(subtract(-5, -3)).toBe(-2);
  });
});

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(5, 5)).toBe(25);
  });

  it('should handle multiplication by zero', () => {
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 10)).toBe(0);
  });

  it('should multiply negative numbers', () => {
    expect(multiply(-3, 4)).toBe(-12);
    expect(multiply(-3, -4)).toBe(12);
  });
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(15, 3)).toBe(5);
  });

  it('should handle decimal results', () => {
    expect(divide(10, 3)).toBeCloseTo(3.333);
    expect(divide(7, 2)).toBe(3.5);
  });

  it('should throw error for division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    expect(() => divide(-5, 0)).toThrow('Cannot divide by zero');
  });
});
