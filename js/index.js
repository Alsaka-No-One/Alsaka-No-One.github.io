document.addEventListener("scroll", () => {
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