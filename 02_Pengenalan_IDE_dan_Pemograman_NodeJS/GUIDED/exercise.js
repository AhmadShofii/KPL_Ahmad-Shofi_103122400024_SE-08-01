// buatkan array berisi tiga elemnt tentang minuman kesukaan, dan simpan dalam variabel liatMinuman
// ganti dua elemtn pertaman dengan minuman kesukaan lain dengan cara index dan penugasan
// tambah satu minuman didepan array

// // Membuat array dengan 3 minuman
// const listMinuman = ["Teh", "lycee tea", "Jus Alpukat"];

// Mengganti dua elemen pertama menggunakan index
// listMinuman[0] = "Susu";
// listMinuman[1] = "Matcha";

// Menambahkan satu minuman di depan array
// listMinuman.unshift("Cokelat");

// Menampilkan hasil
// console.log(listMinuman);


// tuliskan sebuah fungsi yang menerima N bilangan dan mengembalikan nilai penjumlahan dari 1 hingga N

// const input = require("readline-sync");

// function jumlah(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// let n = input.question("Masukkan nilai N: ");
// console.log("Hasil:", jumlah(n));


function SumValues(n) {
    if (n < 0) return 0;

    return (n * (n + 1)) / 2;
}

let n = 5; // Contoh nilai N
console.log("Hasil:", SumValues(n));