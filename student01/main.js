
function showtime() {
    let but = document.getElementById("button");
    but.addEventListener("click", function () {
        document.getElementById("text").innerHTML = new Date().toLocaleString();

    });
}


showtime();6   