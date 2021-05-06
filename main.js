var button = document.getElementById("test");
button.onclick = function() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    overlay.classList.add("clickToExit");
}

function hideOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    overlay.classList.remove("clickToExit");
}

var overlay = document.getElementById("overlay");
overlay.onclick = function() {
    if (overlay.classList.contains("clickToExit")) {
        hideOverlay();
    }
}