const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
})

selectElement('.closed').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

window.addEventListener('resize', () => {
    selectElement('.nav-list').classList.remove('active');
});

selectElement('.nav-item').addEventListener('click', () => {
    selectElement('.nav-link').classList.add('current');
});

document.addEventListener("scroll", function() {
    const nav = document.querySelector("header div.container");
    const navHeight = .1;

    const distanceFromTop = Math.abs(
        document.body.getBoundingClientRect().top
    );

    if (distanceFromTop >= navHeight) nav.classList.add("fixed-top");
    else nav.classList.remove("fixed-top");
});