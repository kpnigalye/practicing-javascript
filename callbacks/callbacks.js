let numbers = [1, 2, 4, 7, 3, 5, 6];

const isEvenNumber = (number) => number % 2 === 0;

// function passed as a callback to another function
const evenNumbers = numbers.filter(isEvenNumber);

// pass an anonymous function as a callback function
const oddNumbers = numbers.filter((number) => number % 2);

console.log(evenNumbers);
console.log(oddNumbers);