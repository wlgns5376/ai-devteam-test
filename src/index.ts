export function greet(name: string): string {
  if (!name || name.trim() === '') {
    throw new Error('Name cannot be empty');
  }
  return `Hello, ${name}!`;
}

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}
