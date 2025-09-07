// drum buttons
const drumButtons = document.querySelectorAll(".drum")

// Add click event listeners to all drum buttons
drumButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonKey = this.classList[0]
    playSound(buttonKey)
    buttonAnimation(buttonKey)
  })
})

// Add keypress event listener to the document
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase()
  if (["w", "a", "s", "d", "j", "k", "l"].includes(key)) {
    playSound(key)
    buttonAnimation(key)
  }
})

// play sound
function playSound(key) {
  let audio

  switch (key) {
    case "w":
      audio = new Audio("sounds/crash.mp3")
      break
    case "a":
      audio = new Audio("sounds/kick-bass.mp3")
      break
    case "s":
      audio = new Audio("sounds/snare.mp3")
      break
    case "d":
      audio = new Audio("sounds/tom-1.mp3")
      break
    case "j":
      audio = new Audio("sounds/tom-2.mp3")
      break
    case "k":
      audio = new Audio("sounds/tom-3.mp3")
      break
    case "l":
      audio = new Audio("sounds/tom-4.mp3")
      break
    default:
      console.log("No sound mapped for key: " + key)
      return
  }

  audio.play()
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey)

  if (activeButton) {
    activeButton.classList.add("pressed")

    setTimeout(() => {
      activeButton.classList.remove("pressed")
    }, 100)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  addDrumImages()
})

// add drum images
function addDrumImages() {
  const drumMapping = {
    w: "images/crash.png",
    a: "images/kick.png",
    s: "images/snare.png",
    d: "images/tom1.png",
    j: "images/tom2.png",
    k: "images/tom3.png",
    l: "images/tom4.png",
  }

  Object.keys(drumMapping).forEach((key) => {
    const button = document.querySelector("." + key)
    if (button) {
      const container = document.createElement("div")
      container.style.display = "flex"
      container.style.flexDirection = "column"
      container.style.alignItems = "center"
      container.style.justifyContent = "center"
      container.style.height = "100%"
      container.style.width = "100%"

      // Create image element
      const img = document.createElement("img")
      img.src = drumMapping[key]
      img.alt = key + " drum"
      img.style.width = "40px"
      img.style.height = "40px"
      img.style.marginBottom = "5px"

      const textSpan = document.createElement("span")
      textSpan.textContent = key
      textSpan.style.fontSize = "2rem"
      textSpan.style.fontWeight = "900"
      textSpan.style.color = "#da0463"
      textSpan.style.textShadow = "3px 0 #dbedf3"
      textSpan.style.fontFamily = '"Arvo", cursive'

      button.innerHTML = ""
      container.appendChild(img)
      container.appendChild(textSpan)
      button.appendChild(container)
    }
  })
}
