/**
 * Mengubah bilangan menjadi "Fizz", "Buzz", "FizzBuzz", atau tetap bilangan
 * @param {number} value - Bilangan bulat yang akan diproses
 * @returns {string|number} - "Fizz" jika kelipatan 3, "Buzz" jika kelipatan 5, 
 *                            "FizzBuzz" jika kelipatan 3 dan 5, atau bilangan asli jika bukan keduanya
 */
function zzzzOrNum(value) {
    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

/**
 * Memproses larik bilangan menjadi larik dengan aturan FizzBuzz
 * @param {number[]} sequence - Larik yang berisi bilangan bulat
 * @returns {Array<string|number>} - Larik hasil konversi FizzBuzz
 */
function fizzBuzz(sequence) {
    const newSequence = sequence.map((e) => zzzzOrNum(e));
    return newSequence;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30];
const result = fizzBuzz(testArray);

console.log("Input:", testArray);
console.log("Output:", result);

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};