fruits = [
  { name: "banana", price: 20 },
  { name: "apple", price: 30 },
  { name: "grape", price: 25 },
  { name: "banana", price: 40 },
];

maximumPrice = 25;

const doNumber2 = (input, max) => {
  let names = [];
  input.forEach((x) => (x.price <= max ? names.push(x.name) : null));
  return [...new Set(names)];
};

const filtedFruits = doNumber2(fruits, maximumPrice);

console.log(filtedFruits);

fruits = [
  { name: "apple", price: 14 },
  { name: "apple", price: 15 },
  { name: "banana", price: 11 },
  { name: "banana", price: 12 },
];

maximumPrice = 13;

const filtedFruits2 = doNumber2(fruits, maximumPrice);

console.log(filtedFruits2);
