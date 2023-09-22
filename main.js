const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu');
const mobileclk = document.querySelector('.mobileclk');
hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-open');
});

mobileclk.addEventListener('click', function() {
    mobile_menu.classList.toggle('is-open');
});