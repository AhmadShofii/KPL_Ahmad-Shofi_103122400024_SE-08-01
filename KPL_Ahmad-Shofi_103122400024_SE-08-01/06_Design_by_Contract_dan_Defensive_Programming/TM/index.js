function is_not_fizzbuzz(number) {
    // Validasi: harus bilangan bulat dan finite
    if (!Number.isInteger(number)) {
        throw new TypeError("Input harus bilangan bulat");
    }

    // Tolak bilangan kelipatan 3, 5, atau 15
    if (number % 3 === 0 || number % 5 === 0) {
        return false;
    }

    // Selain itu diterima
    return true;
}

// Testing
console.log(is_not_fizzbuzz(1))        // true
console.log(is_not_fizzbuzz(3))        // false
console.log(is_not_fizzbuzz(5))        // false
console.log(is_not_fizzbuzz(30))       // false
console.log(is_not_fizzbuzz(7))        // true

// Error cases
try { console.log(is_not_fizzbuzz(null)) } catch (e) { console.log(e.message) }
try { console.log(is_not_fizzbuzz(NaN)) } catch (e) { console.log(e.message) }
try { console.log(is_not_fizzbuzz(Infinity)) } catch (e) { console.log(e.message) }