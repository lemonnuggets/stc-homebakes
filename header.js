window.onscroll = () => {
    document
        .querySelector(".navbar")
        .classList.toggle(
            "header-stuck",
            document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
        );
};
