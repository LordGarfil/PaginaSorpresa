/*

const password = "SimpleS4mplePa55";
console.log(zxcvbn(password, (user_inputs = [])));

// */

Array.from(document.querySelectorAll(".LoginCard-input") || []).forEach(
  (input) => {
    input.addEventListener("focus", (event) => {
      event.target.classList.add("focus")
    })
    input.addEventListener("blur", (event) => {
      if (!event.target.value.length) {
        event.target.classList.remove("focus")
      }
    })
  }
)

const loginForm = document.querySelector(".LoginCard")
loginForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const input = document.querySelector(".LoginCard-input")
  validarNombre(input.value)
})

function validarNombre(name) {
  const nombre = "felipe teran"

  name = name.toLowerCase().trim()

  if (name) {
    if (name.includes(nombre)) {
       playMusic()
      hideLogin()
      showGift()
    } else {
      failLoginText("Usted no es el cumpleañero 🤨")
    }
  } else {
    failLoginText("Mijo, ponga su nombre")
  }
}

function hideLogin() {
  const container = document.querySelector(".card-container")
  container.style.display = "none"
}

function showGift() {
  const boxContainer = document.querySelector(".box-container")
  boxContainer.style.display = "block"
}

function failLoginText(message) {
  const failLoginText = document.querySelector(".fail-login")
  failLoginText.innerHTML = message
  setTimeout(function () {
    failLoginText.innerHTML = null
  }, 2200)
}

function playMusic() {
  const audio = new Audio("quediostebendiga.mp3")
  audio.play()
}
