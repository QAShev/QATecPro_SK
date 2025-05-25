// Task - 1
function getFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(getFirstChar("кіт")); 
//Task - 2
function checkSpam(str) {
    return str.toLowerCase().includes("forex") || str.toLowerCase().includes("crypto");
}
console.log(checkSpam('Some test string with CRYPTO')) 
//Task - 3
function extractCurrencyValue(str) {
    return str.slice(1)
};
console.log(extractCurrencyValue("$120")); 