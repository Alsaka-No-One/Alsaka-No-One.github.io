document.addEventListener("scroll", () => {
    const navBar = document.querySelector("nav");
    const headerHeight = 267;

    const distanceFromTop = Math.abs(
        document.body.getBoundingClientRect().top
    );
    if (distanceFromTop >= headerHeight) {
        document.body.classList.add("fixed-top");
    } else {
        document.body.classList.remove("fixed-top");
    }
})

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