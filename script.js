let skip = false;
window.onscroll = () => {
    // console.log(document.body.scrollTop, document.documentElement.scrollTop);
    // console.log(!skip);
    // if (!skip) {
    console.log("switching");
    document
        .querySelector(".navbar")
        .classList.toggle(
            "header-stuck",
            document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
        );
    setTimeout(500);
    // }
    // skip = !skip;
};
const scrollOptions = {
    behavior: "smooth",
    block: "center",
};
console.log(document.querySelectorAll("a").forEach);
document.querySelectorAll("a").forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        const url = new URL(element.href);
        console.log(url.hash);
        document.querySelector(url.hash)?.scrollIntoView(scrollOptions);
    });
});
