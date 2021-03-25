document.addEventListener("scroll", () => {
    const navBar = document.querySelector("nav");
    const headerHeight = 267;

    const distanceFromTop = Math.abs(
        document.body.getBoundingClientRect().top
    );
    if (distanceFromTop >= headerHeight) {
        navBar.classList.add("fixed-top");
    } else {
        navBar.classList.remove("fixed-top");
    }
})