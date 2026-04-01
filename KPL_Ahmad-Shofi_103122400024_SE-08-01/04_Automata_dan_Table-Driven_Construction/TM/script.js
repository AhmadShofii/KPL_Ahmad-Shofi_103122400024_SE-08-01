function hitungHuruf() {
    let teks = document.getElementById("teks").value;
    
    let huruf = 0;
    let hurufBesar = 0;
    let hurufKecil = 0;
    
    for (let i = 0; i < teks.length; i++) {
        let karakter = teks[i];
        
        if ((karakter >= 'A' && karakter <= 'Z') || (karakter >= 'a' && karakter <= 'z')) {
            huruf++;
        }
        
        if (karakter >= 'A' && karakter <= 'Z') {
            hurufBesar++;
        }
        
        if (karakter >= 'a' && karakter <= 'z') {
            hurufKecil++;
        }
    }
    
    document.getElementById("total").innerText = huruf;
    document.getElementById("besar").innerText = hurufBesar;
    document.getElementById("kecil").innerText = hurufKecil;
}

function ubahKeHurufBesar() {
    let teks = document.getElementById("teks").value;
    document.getElementById("editor-kecil").value = teks.toUpperCase();
}

function ubahKeHurufKecil() {
    let teks = document.getElementById("teks").value;
    document.getElementById("editor-kecil").value = teks.toLowerCase();
}

function modeTerang() {
    // Hapus semua class mode
    document.body.classList.remove('dark-mode', 'sepia-mode');
    document.getElementById("container").classList.remove('dark-mode', 'sepia-mode');
    
    // Tambah class light-mode
    document.body.classList.add('light-mode');
    document.getElementById("container").classList.add('light-mode');
}

function modeGelap() {
    // Hapus semua class mode
    document.body.classList.remove('light-mode', 'sepia-mode');
    document.getElementById("container").classList.remove('light-mode', 'sepia-mode');
    
    // Tambah class dark-mode
    document.body.classList.add('dark-mode');
    document.getElementById("container").classList.add('dark-mode');
}

function modeSepia() {
    // Hapus semua class mode
    document.body.classList.remove('light-mode', 'dark-mode');
    document.getElementById("container").classList.remove('light-mode', 'dark-mode');
    
    // Tambah class sepia-mode
    document.body.classList.add('sepia-mode');
    document.getElementById("container").classList.add('sepia-mode');
}

// Inisialisasi mode terang saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    modeTerang();
});