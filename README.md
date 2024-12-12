# goit-js-hw-03

<!-- =============================== -->

Задача 1. Генератор slug

Виконуй це завдання у файлі task-1.js

Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!

Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веб розробці для створення читабельних URL-адрес.

Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug із назви статті. У результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-beginners.

Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.

З цим розібралися? А тепер давай нарешті виконувати задачу!

Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
Усі символи slug повинні бути в нижньому регістрі.
Усі слова slug повинні бути розділені тире.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// Функція slugify приймає заголовок статті (title) як вхідний параметр
function slugify(title) {
// Перетворюємо рядок у нижній регістр за допомогою методу toLowerCase()
const lowerCaseTitle = title.toLowerCase();

// Замінюємо пробіли між словами на тире (-) за допомогою методу replace() або split().join()
const slug = lowerCaseTitle.split(' ').join('-');

// Повертаємо отриманий slug
return slug;
}

<!-- ======================= -->

Задача 2. Композиція масивів

Виконуй це завдання у файлі task-2.js

Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
В іншому випадку функція повинна повернути весь новий масив.

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

Ось рішення задачі "Композиція масивів":

// Функція makeArray приймає три параметри: firstArray, secondArray, maxLength
function makeArray(firstArray, secondArray, maxLength) {
// Створюємо новий масив, об'єднавши firstArray та secondArray за допомогою методу concat
const combinedArray = firstArray.concat(secondArray);

// Якщо довжина нового масиву більша за maxLength, повертаємо його копію з обмеженою довжиною
if (combinedArray.length > maxLength) {
return combinedArray.slice(0, maxLength); // slice повертає частину масиву від 0 до maxLength
}

// Інакше повертаємо весь масив
return combinedArray;
}

<!-- ======================= -->

Задача 3. Фільтрація масиву чисел

Виконуй це завдання у файлі task-3.js

Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.

Усередині функції:

Створи порожній масив, у який будеш додавати підходящі числа.
Використай цикл для ітерації кожного елемента масиву numbers.
Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
Поверни свій новий масив з підходящими числами як результат.

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

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

// Тести для перевірки:
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
