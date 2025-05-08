// Що таке умовна конструкція?

// Який оператор порівняння використовує switch?

// Яке ключове слово зупиняє процес порівняння в switch?

// Чим відрізняється ключове слово case від default у switch?

// Що таке тернарний оператор?

// Чи буде показано console log?
if ("0") {
  console.log('Привіт');
}

// Яке значення у с?
let e = 2; let b = 1; let c;
console.log(c);

// Який буде результат цих виразів?
console.log(5 > 4)
console.log("ананас" > "яблуко")
console.log("2" > "12")
console.log(undefined == null)
console.log(undefined === null)

// Які кінцеві значення всіх змінних a та x після виконання коду нижче?
let a = 2;
let x = 1 + (a * 2);
//let x = 1 + (a *= 2);
console.log("a = " + a)
console.log("x = " + x)

// Які кінцеві значення всіх змінних q, r, w та d після виконання коду нижче?
let q = 1; 
let r = 1;
let w = ++q;                  
let d = r++;                              

console.log("q = " + q)
console.log("r = " + r)
console.log("w = " + w)
console.log("d = " + d)

// let d = r;   
// let r = r+1; // r++ = r+1  

// let w = ++q; // 1) +1 до  кью 2) змінили значення кью 3) змінили значення дабалью
// let d = r++; // 1) змінили значення d 2) +1 до р 3) змінили значення р

// 1) q + 1 -> q = 2 2) w = q -> w = 2    q++ =   q= q+ 1 
// 1) d = r -> d = 1  2) r ++ = r = r+1 -> r = 2


// Поясніть, чому буде дорівнювати?
// Як змінити умову, щоб знижка була 30% для студентів молодше 20 років?
let age = 25;
let isStudent = true;
let discount = (age < 30 && isStudent) ? "20%" : "5%";
console.log(discount);

// Що виведе код? 
let orderStatus = "shipped";
switch (orderStatus) {
    case "pending":
        console.log("Замовлення обробляється");
        break;
    case "shipped":
        console.log("Замовлення відправлено");
        break;
    case "delivered":
        console.log("Замовлення доставлено");
        break;
    default:
        console.log("Невідомий статус");
}

// Що виведе код? 
// Що станеться, якщо userName = "Анна"?
let userName = "";
// let userName = "Анна";
let defaultName = "Гість";
let displayName = userName || defaultName;
console.log(displayName);

// Який буде результат? 
// Як змінити вираз, щоб отримати true?
let result = 2 + 3 * 4 && 5 || 0;
console.log(result);

// Що виведе код?
let temperature = 25;
let weather = temperature > 20 ? "Тепло" : temperature < 0 ? "Холодно" : "Прохолодно";
console.log(weather);

// Що виведе код?
let isAdmin = false;
let isLoggedIn = true;
let canEdit = isAdmin || (isLoggedIn && !isAdmin);
console.log(canEdit);

// Поясніть результати
console.log("кіт" > "кот");
console.log(0 == false);
console.log(0 === false);

// Що виведе код?
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade);

