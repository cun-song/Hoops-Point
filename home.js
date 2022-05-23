var A1 = document.getElementById("A1");

A1.onclick = function() {
    var a = "kyrie.png";
    let tinggi = 200;
    let lebar = 360;
    var nama = "Kyrie 5";
    var harga = "1.200.000";
    var deskripsi = "Sepatu Basket Kyrie 5 berkualitas yang dijamin pasti Ori";
    localStorage.setItem("value", a);
    localStorage.setItem("height", tinggi);
    localStorage.setItem("width", lebar);
    localStorage.setItem("name", nama);
    localStorage.setItem("price", harga);
    localStorage.setItem("des", deskripsi);
    window.location.href = "CheckOut.html";
}

var A2 = document.getElementById("A2");

A2.onclick = function() {
    var a = "under-armour-curry-8.png";
    let tinggi = 200;
    let lebar = 360;
    var nama = "Curry 8";
    var harga = "3.000.000";
    var deskripsi = "Sepatu Basket Curry 8 berkualitas yang dijamin pasti Ori";
    localStorage.setItem("value", a);
    localStorage.setItem("height", tinggi);
    localStorage.setItem("width", lebar);
    localStorage.setItem("name", nama);
    localStorage.setItem("price", harga);
    localStorage.setItem("des", deskripsi);
    window.location.href = "CheckOut.html";
}

var A3 = document.getElementById("A3");

A3.onclick = function() {
    var a = "kobe 5 proto.jpg";
    let tinggi = 200;
    let lebar = 360;
    var nama = "Kobe 5 proto";
    var harga = "2.200.000";
    var deskripsi = "Sepatu Basket Kobe 5 proto berkualitas yang dijamin pasti Ori";
    localStorage.setItem("value", a);
    localStorage.setItem("height", tinggi);
    localStorage.setItem("width", lebar);
    localStorage.setItem("name", nama);
    localStorage.setItem("price", harga);
    localStorage.setItem("des", deskripsi);
    window.location.href = "CheckOut.html";
}