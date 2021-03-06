
document.addEventListener("DOMContentLoaded", () => {
    var input = document.getElementById("search-input");

    input.addEventListener("input", (event) => {
        let value = event.target.value
            .toLocaleLowerCase()
            .split(" ")
            .filter(Boolean);

        document.querySelectorAll(".card-white").forEach(el => {
            let titleElement = el.querySelector('h2').textContent.toLocaleLowerCase();
            
            el.style.display = !value.length || value.some(
                val => titleElement.includes(val)
            ) ? "" : "none";
        });
    });
});