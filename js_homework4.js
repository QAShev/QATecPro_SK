function checkProbabilityTheory(count) {
    let evens = 0;
    let odds = 0;

    for (let i = 0; i < count; i++) {
        const num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (num % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }

    const evenPercentage = ((evens / count) * 100).toFixed(2);
    const oddPercentage = ((odds / count) * 100).toFixed(2);

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evens}`);
    console.log(`Непарних чисел: ${odds}`);
    console.log(`Відсоток парних: ${evenPercentage}%`);
    console.log(`Відсоток непарних: ${oddPercentage}%`);
}

checkProbabilityTheory(10);