
'number' + 3 + 3 
// 'number' + 3 → 'number3' (string + number = string)
//Result: 'number33'

null + 3
//Null as number = 0
// 0+3=3
//Result: 3

5 && "qwerty"
// 5 — істинне → повертається "qwerty"
//Result: 'qwerty'

+'40' + +'2' + "hillel";
// +'40' → 40
// +'2' → 2
// 40 + 2 → 42
// 42 + "hillel" → '42hillel'
//Result: '42hillel'

'10' - 5 === 6;
// '10' - 5 → 10 - 5 = 5 (рядок приводиться до числа)
// 5 === 6 → false
//Result: false

true + false
// true → 1, false → 0
// 1 + 0 = 1
//Result: 1

'4px' - 3
// '4px' → NaN (неможливо привести до числа)
// NaN - 3 → NaN
//Result: NaN

'4' - 3
// '4' → 4
// 4 - 3 = 1
//Result: 1

'6' + 3 ** 0;
// 3 ** 0 = 1
// '6' + 1 → '61'
//Result: 61

12 / '6'
// '6' → 6
// 12 / 6 = 2
//Result: 2

'10' + (5 === 6);
// 5 === 6 → false
// '10' + false → '10false'
//Result: '10false'

null == ''
// null == '' → false (null рівний тільки undefined)
//Result: false

3 ** (9 / 3);
// 9 / 3 = 3
// 3 ** 3 = 27
//Result: 27

!!'false' == !!'true'
// !!'false' → true (непорожній рядок → true)
// !!'true' → true
// true == true → true
//Result:true

0 || '0' && 1
// '0' && 1 → 1 ('0' істинне, тому повертається 1)
// 0 || 1 → 1
//Result:1

(+null == false) < 1;
// +null → 0
// 0 == false → true
// true < 1 → 1 < 1 → false
//Result: false

false && true || true
// false && true → false
// false || true → true
//Result:true

false && (false || true);
// false || true → true
// false && true → false
//Result: false

(+null == false) < 1 ** 5;
// +null → 0
// 0 == false → true
// 1 ** 5 = 1
// true < 1 → 1 < 1 → false
//Result: false