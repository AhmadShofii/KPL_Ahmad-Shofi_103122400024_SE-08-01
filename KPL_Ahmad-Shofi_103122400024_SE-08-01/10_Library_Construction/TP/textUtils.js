// Fungsi untuk menghitung jumlah huruf A-Z dan a-z
export function hitungHuruf(teks) {
  const huruf = teks.match(/[A-Za-z]/g);

  if (huruf === null) {
    return 0;
  }

  return huruf.length;
}

// Fungsi untuk menghitung jumlah kata yang terdiri dari huruf A-Z dan a-z
export function hitungKata(teks) {
  const kata = teks.match(/[A-Za-z]+/g);

  if (kata === null) {
    return 0;
  }

  return kata.length;
}