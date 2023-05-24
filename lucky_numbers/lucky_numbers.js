function findAll(n, k) {
    let count = 0;
    let min = "";
    let max = "";

    // функция проверки числа на счастливость
    function isLucky(num) {
        const digits = num.toString().split('').map(Number);
        if (digits.length !== k) { // если количество цифр не совпадает, то это не счастливое число
            return false;
        }
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] < (i+1)) { // проверка на неубывающий порядок цифр
                return false;
            }
            sum += digits[i];
        }
        return sum === n; // проверка на сумму значений цифр
    }

    // перебор всех возможных чисел и проверка на счастливость
    for (let i = Math.pow(10, k-1); i < Math.pow(10, k); i++) {
        if (isLucky(i)) {
            count++;
            if (min === "") {
                min = i.toString();
            }
            max = i.toString();
        }
    }

    if (count === 0) {
        return [0];
    } else {
        return [count, min, max];
    }
}

// module.exports = findAll;

console.log(findAll(10, 3)); // [8, "118", "334"]
console.log(findAll(27, 3)); // [1, "999", "999"]
console.log(findAll(28, 3)); // [0]