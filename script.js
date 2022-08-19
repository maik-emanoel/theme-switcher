const body = document.querySelector("body")
const toggle = document.querySelector('.toggle')
const ball = document.querySelector(".ball")
const h2 = document.querySelector('h2')


toggle.addEventListener('click', function darkMode() {
  body.classList.toggle('black')
  ball.classList.toggle('black')
  
  if(h2.classList.toggle('black') === true) {
    h2.innerHTML = 'Hello there, DarkModeON!'
    h2.style.transition = '.4s ease-in-out'
  } else {
    h2.innerHTML = 'Hello there, LightModeON!'
  }
})
