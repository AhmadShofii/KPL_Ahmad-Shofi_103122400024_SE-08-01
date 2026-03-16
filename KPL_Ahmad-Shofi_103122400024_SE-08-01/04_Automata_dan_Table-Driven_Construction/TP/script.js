function hitungHuruf(){

let teks = document.getElementById("teks").value;

let huruf = 0;
let hurufBesar = 0;
let hurufKecil = 0;

for(let i = 0; i < teks.length; i++){

let karakter = teks[i];

if((karakter >= 'A' && karakter <= 'Z') || (karakter >= 'a' && karakter <= 'z')){
huruf++;
}

if(karakter >= 'A' && karakter <= 'Z'){
hurufBesar++;
}

if(karakter >= 'a' && karakter <= 'z'){
hurufKecil++;
}

}

document.getElementById("total").innerText = huruf;
document.getElementById("besar").innerText = hurufBesar;
document.getElementById("kecil").innerText = hurufKecil;

}


function ubahKeHurufBesar(){

let teks = document.getElementById("teks").value;

document.getElementById("editor-kecil").value = teks.toUpperCase();

}


function ubahKeHurufKecil(){

let teks = document.getElementById("teks").value;

document.getElementById("editor-kecil").value = teks.toLowerCase();

}


function modeGelap(){

document.body.style.background = "#1e1e1e";

document.getElementById("container").style.background = "#2e3443";
document.getElementById("container").style.color = "white";

document.getElementById("teks").style.background = "#2e3443";
document.getElementById("teks").style.color = "white";

document.getElementById("editor-kecil").style.background = "#2e3443";
document.getElementById("editor-kecil").style.color = "white";

}


function modeTerang(){

document.getElementById("container").style.background = "#ddd";
document.getElementById("container").style.color = "black";

document.getElementById("teks").style.background = "white";
document.getElementById("teks").style.color = "black";

document.getElementById("editor-kecil").style.background = "#f5f5f5";
document.getElementById("editor-kecil").style.color = "black";

}