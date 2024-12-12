// Функція filterArray приймає два параметри: масив чисел numbers і значення value
function filterArray(numbers, value) {
  // Створюємо порожній масив для збереження чисел, які більші за value
  const filteredNumbers = [];

  // Проходимося по кожному числу у масиві numbers за допомогою циклу for
  for (const number of numbers) {
    // Перевіряємо, чи число більше за value
    if (number > value) {
      // Якщо умова виконується, додаємо число до масиву filteredNumbers
      filteredNumbers.push(number);
    }
  }

  // Повертаємо новий масив із числами, що відповідають умові
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
