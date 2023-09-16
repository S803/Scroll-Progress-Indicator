const progressElem = document.querySelector('.progress')

const html = document.querySelector('html')

const body = document.querySelector('body')

function scrollHandler() {
    const screenHeight = window.innerHeight
    const scrollY = Math.round(window.scrollY)
    const maxScreenHeight = html.scrollHeight
    const howMuchScroll = screenHeight + scrollY
    const progress = (howMuchScroll / maxScreenHeight) * 100

    progressElem.value = progress
}

scrollHandler()

window.addEventListener('scroll' , scrollHandler)