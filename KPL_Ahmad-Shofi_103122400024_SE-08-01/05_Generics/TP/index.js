function hitung(str, tipe) {
    if (tipe === "semua") {
        let jumlahSemua = 0;
        for (const c of str) {
            jumlahSemua++;
        }
        return jumlahSemua;
    } 
    else if (tipe === "huruf") {
        let jumlahHuruf = 0;
        for (const c of str) {
            if (c === ' ') continue;
            jumlahHuruf++;
        }
        return jumlahHuruf;
    }
    // Jika tipe tidak dikenal, tidak mengembalikan apa-apa (undefined)
}

// Test code
const str = "Bar bar bar";

console.log(
    hitung(str, "semua") // Harusnya 11
);

console.log(
    hitung(str, "huruf") // Harusnya 9
);

hitung(str, "huruf"); // Tidak terjadi apa-apa (tidak ada console.log)