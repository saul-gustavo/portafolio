const darkToggle = document.querySelector('.mode-toggle')
const iconSun = document.getElementById('icon-sun')
const iconMoon = document.getElementById('icon-moon')
const darkBody = document.getElementById('body')

darkToggle.addEventListener('click', () => {
    darkBody.classList.toggle('dark')

    if (darkBody.classList.contains('dark')) {
        iconSun.style.display = 'none'
        iconMoon.style.display = 'inline-block'
    } else {
        iconSun.style.display = 'inline-block'
        iconMoon.style.display = 'none'
    }
})