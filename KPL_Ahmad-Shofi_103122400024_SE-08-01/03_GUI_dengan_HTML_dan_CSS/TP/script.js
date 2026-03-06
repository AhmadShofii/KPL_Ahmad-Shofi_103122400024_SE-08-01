function hitungHuruf(){
    let teks = document.getElementById("teks").value;

    let total = teks.length;
    let besar = 0;
    let kecil = 0;

    for(let i=0;i<teks.length;i++){
        if(teks[i] >= 'A' && teks[i] <= 'Z'){
            besar++;
        }
        else if(teks[i] >= 'a' && teks[i] <= 'z'){
            kecil++;
        }
    }

    document.getElementById("total").innerText = total;
    document.getElementById("besar").innerText = besar;
    document.getElementById("kecil").innerText = kecil;
}

function besar(){
    let teks = document.getElementById("teks");
    teks.value = teks.value.toUpperCase();
    hitungHuruf();
}

function kecil(){
    let teks = document.getElementById("teks");
    teks.value = teks.value.toLowerCase();
    hitungHuruf();
}

function paragraf(){
    let teks = document.getElementById("teks");
    teks.value = teks.value.replace(/\n/g,"\n\n");
    hitungHuruf();
}