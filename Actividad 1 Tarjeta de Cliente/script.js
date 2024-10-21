document.getElementById('curiosityBtn').addEventListener('click', function() {
    let curiosity = document.getElementById('curiosity');
    if (curiosity.innerText === "") {
        curiosity.innerText = "Le gustaría emprender algún negocio web en el futuro 🚀";
    } else {
        curiosity.innerText = "";
    }
});