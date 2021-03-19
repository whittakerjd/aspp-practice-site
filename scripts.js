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