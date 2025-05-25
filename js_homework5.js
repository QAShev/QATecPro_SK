var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

function price() {
    let totalCount = 0
    for (key in services) {
        let value = services[key]
        totalCount += parseFloat(value.replace(' грн', ''))
    }
    return totalCount + ' грн'
}

console.log(price())

function minPrice() {
    let minPrice = 0
    for (key in services) {
        let value = services[key] 
        let price = parseFloat(value.replace(' грн', ''))
        if (!minPrice || price < minPrice) {
            minPrice = price
        }
    }
    return minPrice + ' грн'
}
console.log(minPrice())

function maxPrice() {
    let maxPrice = 0
    for (key in services) {
        let value = services[key] 
        let price = parseFloat(value.replace(' грн', ''))
        if (!maxPrice || price > maxPrice) {
            maxPrice = price
        }
    }
    return maxPrice + ' грн'
}
console.log(maxPrice())