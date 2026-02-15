const menue = document.querySelector('.menue')
const sideBar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')

menue.addEventListener('click', () => {
    sideBar.classList.add('active')
    overlay.classList.add('active')
})
overlay.addEventListener('click', () => {
    sideBar.classList.remove('active')
    overlay.classList.remove('active')
})
