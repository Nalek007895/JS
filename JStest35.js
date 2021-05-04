const arrayOfNumbers = [10, 6, 5, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum); // 10