let skip = false;
window.onscroll = () => {
    document
        .querySelector(".navbar")
        .classList.toggle(
            "header-stuck",
            document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
        );
    document.querySelector(".navbar-collapse").classList.remove("show");
    document.querySelector(".navbar").classList.remove("navbar-opaque");
    setTimeout(500);
};
const scrollOptions = {
    behavior: "smooth",
    block: "start",
};
document.querySelectorAll("a").forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        const url = new URL(element.href);
        document.querySelector(url.hash)?.scrollIntoView(scrollOptions);
    });
});
document.querySelector(".navbar-toggler").addEventListener("click", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar-opaque");
});
