// hamburger
const toggleBtn = document.querySelector('.hamburger')
const bars = document.querySelector('.bar')
const navbar = document.querySelector('.navbar')


toggleBtn.addEventListener('click', function () {
    bars.classList.toggle('toggled')
    navbar.classList.toggle('show-nav')
})