function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number | string): number {
  if (typeof b === 'string') {
    b = parseFloat(b); 
    if(isNaN(b)){
      throw new Error('Invalid input: b must be a number or a parsable string');
    }
  }
  return a + b;
}

const result1 = add(5, 10); // Correct usage
const result2 = addSafe(5, '10'); // Safe usage, string is parsed to number
const result3 = addSafe(5, "hello"); // throws an error because string is not a number
console.log(result1, result2); // Outputs 15, 15