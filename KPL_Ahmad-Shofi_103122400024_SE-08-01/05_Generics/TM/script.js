// @ts-nocheck

/**
 * Mengubah bilangan menjadi "Fizz", "Buzz", "FizzBuzz", atau tetap bilangan
 * @param {number} value - Bilangan bulat yang akan diproses
 * @returns {string|number} - "Fizz" jika kelipatan 3, "Buzz" jika kelipatan 5, 
 *                            "FizzBuzz" jika kelipatan 3 dan 5, atau bilangan asli jika bukan keduanya
 * @throws {Error} Jika value bukan bilangan bulat
 */
function zzzzOrNum(value) {
    // Validasi tipe data
    if (typeof value !== 'number' || !Number.isInteger(value)) {
        throw new Error("Parameter harus berupa bilangan bulat");
    }
    
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
 * @throws {Error} Jika sequence bukan array
 */
function fizzBuzz(sequence) {
    // Validasi tipe data
    if (!Array.isArray(sequence)) {
        throw new Error("Parameter harus berupa array");
    }
    
    const newSequence = sequence.map((e) => zzzzOrNum(e));
    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};