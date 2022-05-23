var nilai = localStorage.getItem("value");
let tinggi = localStorage.getItem("height");
let lebar = localStorage.getItem("width");
var harga = localStorage.getItem("price");
var nama = localStorage.getItem("name");
var deskripsi = localStorage.getItem("des");
var flag = localStorage.getItem("flag");
document.getElementById("image").src = nilai;
document.getElementById("image").width = lebar;
document.getElementById("image").height = tinggi;
document.getElementById("name").innerText = nama;
document.getElementById("price").innerText = harga;
document.getElementById("deskrip").innerText = deskripsi;


if (flag == 2) {
    document.getElementById("AB1").innerText = "M";
    document.getElementById("AB2").innerText = "L";
    document.getElementById("AB3").innerText = "XL";
    document.getElementById("AB4").innerText = "XXL";
} else if (flag == 3) {
    document.getElementById("AB1").innerText = "5";
    document.getElementById("AB2").innerText = "6";
    document.getElementById("AB3").innerText = "7";
    document.getElementById("AB4").innerText = "#";
}

var resetvalue = 0;
localStorage.setItem("flag", resetvalue);

function membeli() {
    const muncul = document.getElementById("pform");
    muncul.style.display = "flex";
    muncul.scrollIntoView();
}


function validasi() {
    var sname = document.forms["checkout"]["name"].value;
    var age = document.forms["checkout"]["age"].value;
    var email = document.forms["checkout"]["email"].value;
    var nohp = document.forms["checkout"]["nohp"].value;
    var poscode = document.forms["checkout"]["poscode"].value;
    var address = document.forms["checkout"]["address"].value;

    if (sname == "") {
        alert("Nama harus di isi");
        return false;
    }
    if (age == "") {
        alert("Umur harus di isi");
        return false;
    }
    if (email == "") {
        alert("Email harus di isi");
        return false;
    }
    if (nohp == "") {
        alert("Nomor Hp harus di isi");
        return false;
    }
    if (poscode == "") {
        alert("Kode Pos harus di isi");
        return false;
    }
    if (address == "") {
        alert("Alamat harus di isi");
        return false;
    }
    if (age < 17) {
        alert("Pengguna harus berusia minimal 17 tahun");
        return false;
    }
    if (nohp.length < 8) {
        alert("Nomor Hp harus lebih dari 8 angka");
        return false;
    }
    if (poscode.length != 5) {
        alert("kode pos harus terdiri dari 5 angka");
        return false;
    }

    location.replace("home.html");
}