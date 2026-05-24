import { hitungHuruf, hitungKata } from "./textUtils.js";

const kalimat = "Halo Nama Saya Ahmad Shofi";

console.log("Teks:", kalimat);
console.log("Jumlah huruf:", hitungHuruf(kalimat));
console.log("Jumlah kata:", hitungKata(kalimat));