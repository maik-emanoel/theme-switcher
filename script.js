const body = document.querySelector("body")
const toggle = document.querySelector('.toggle')
const ball = document.querySelector(".ball")
const h2 = document.querySelector('h2')
const p = document.querySelector('p')
const link = document.querySelector('a')


toggle.addEventListener('click', function darkMode() {
  body.classList.toggle('black')
  ball.classList.toggle('black')
  p.classList.toggle('black')
  link.classList.toggle('black')

  const isDarkModeOn = h2.classList.toggle('black')
  
  if( isDarkModeOn === true) {
    h2.innerHTML = 'Hello there, DarkModeON!'
    h2.style.transition = '.4s ease-in-out'
  } else {
    h2.innerHTML = 'Hello there, LightModeON!'
  }

})
