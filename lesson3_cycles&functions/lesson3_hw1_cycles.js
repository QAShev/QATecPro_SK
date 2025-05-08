/* Task - 1

Замініть цикл "for" на цикл "while"  */

for (let i = 0; i < 8; i++) {
  console.log( `число - ` + i);
}

let i = 0;
while (i < 8) {
  console.log(`число - ` + i);
  i++;
}

/* Task - 2

  Реалізувати алгоритм, який обчислює суму чисел від firstNumber до secondNumber (включно)
  
  Використайте цикл "for"   */

let firstNumber = -100;
let secondNumber = 250;

let sum = 0;
for (let i = firstNumber; i <= secondNumber; i++) {
  sum += i;
}

console.log("The sum of numbers from " + firstNumber + " to " + secondNumber + " (including) = " + sum);

/* Task - 3

Зробіть таймер, який рахуватиме від 10 до 0

! ! ! https://www.tiktok.com/@devslopes/video/7146708519427820843 ! ! !

  For example,
  10 seconds left
  9 seconds left
  8 seconds left 
*/

let timeLeft = 10;

let timer = setInterval(function() {
  if (timeLeft > 0) {
    console.log(`${timeLeft} seconds left`);
    timeLeft--;
  } else {
    console.log('Time is up!');
    clearInterval(timer); 
  }
}, 1000);

/* Task - 4

  Скласти програму для виведення на екран наступної послідовності: 7 14 21 28 35 42 49 */

  for (let i = 7; i <= 49; i += 7) {
    console.log(i);
  }

/* Task - 5

  Напишіть функцію printMultiples, яка приймає число number і виводить усі кратні числа від 1 до 10 (включно) для цього числа за допомогою циклу do...while. 
  Наприклад, для number = 3 виведіть 3, 6, 9.*/

  function printMultiples(number) {
    let i = 1;
    do {
      let multiple = number * i;
      if (multiple <= 10) {
        console.log(multiple);
      }
      i++;
    } while (number * i <= 10);
  }
  
  printMultiples(3);

/* Task - 6

  Реалізувати алгоритм, який обчислює факторіал для з використанням операторів "for", "while", "do..while"
  

  what is factorial: https://www.mathsisfun.com/numbers/factorial.html 
*/

function factorialFor(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialFor(5));


/* Task - 7 

  Реалізувати алгоритм наповнення ванни відрами. 
  Ми знаємо, скільки літрів вміщує ванна і місткість одного відра, 
  але ми не знаємо, скільки відер нам потрібно. 
  Нам потрібно наповнити ванну, не переповнивши її.

  Використання циклу "while" 
*/

let bucket = 5; // Місткість одного відра
let initialBathState = 0; // Початкове значення кількості води у ванній кімнаті
let bathCapacity = 60; // Місткість ванни

let bucketCount = 0;

while (initialBathState + bucket <= bathCapacity) {
  initialBathState += bucket; 
  bucketCount++; 
}

console.log(`We need to ${bucketCount} buckets, to fill the tub to the level of ${initialBathState} liters.`);