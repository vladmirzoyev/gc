var modal = document.getElementById('mymodal');
var btn = document.getElementById("modalbtn");
var span = document.getElementsByClassName("close");

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

// $('.close').click(function) {
//     $('.modal').fadeOut();
// });

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}