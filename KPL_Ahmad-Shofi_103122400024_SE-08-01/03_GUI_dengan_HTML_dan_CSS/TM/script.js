function hitungHurufKecil() {
    let teks = document.getElementById("teks").value;
    let jumlahHurufKecil = 0;

    for (let i = 0; i < teks.length; i++) {
        if (teks[i] >= 'a' && teks[i] <= 'z') {
            jumlahHurufKecil++;
        }
    }

    document.getElementById("hk").innerText = jumlahHurufKecil;
}

function ubahKeHurufBesar() {
    let teks = document.getElementById("teks").value;
    let hasil = teks.toUpperCase();

    document.getElementById("editor-kecil").value = hasil;
}

function ubahKeHurufKecil() {
    let teks = document.getElementById("teks").value;
    let hasil = teks.toLowerCase();

    document.getElementById("editor-kecil").value = hasil;
}