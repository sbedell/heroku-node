angular.module('steveApp').controller('storageController', storageController);

function storageController() {
    let bgColorSelector = document.getElementById("bgcolor");

    if (localStorage.getItem("bgColor")) {
        bgColorSelector.value = localStorage.getItem("bgColor");
        changeBackgroundColor(bgColorSelector.value);
    }

    function changeBackgroundColor(color) {
        if (typeof color === "string") {
            document.getElementById("storageDemo").style.backgroundColor = color;
        }
    }

    // ~~~~~ Adding Event Listeners ~~~~~
    bgColorSelector.addEventListener("change", function changeColor() {
        let newBG = document.getElementById("bgcolor").value;
        localStorage.setItem("bgColor", newBG);
        changeBackgroundColor(newBG);
    });

    document.getElementById("deleteBtn").addEventListener("click", function confirmClear() {
        if (confirm("Are you sure you want to clear storage?")) {
            localStorage.clear();
        }
    });
}
