const arr1 = [2, 0, 26, 28, -2];

function mulOfArray(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {   // hanya angka positif
            result *= arr[i];
        }
    }
    return result;
}

console.log(mulOfArray(arr1)); // Output: 1456