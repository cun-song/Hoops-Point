const slide = document.getElementsByClassName('pcontent');
for (i = 0; i < slide.length; i++) {
    slide[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

var gambar = "A2";
localStorage.setItem("gambar", gambar);