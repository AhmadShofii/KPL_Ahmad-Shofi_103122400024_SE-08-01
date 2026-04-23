function toNumberArray(input) {
    // Gabungkan array jadi satu string (kalau input array)
    const str = Array.isArray(input) ? input.join(" ") : input;

    // Ambil semua angka (termasuk desimal & negatif)
    const matches = str.match(/-?\d+(\.\d+)?/g);

    // Jika tidak ada angka, kembalikan array kosong
    if (!matches) return [];

    // Ubah ke number
    return matches.map(Number);
}

// Testing
console.log(toNumberArray("1, 2"))               // [1, 2]
console.log(toNumberArray(["1", "2"]))           // [1, 2]
console.log(toNumberArray(" 11,55,33 "))         // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11, 23]