const button = document.getElementById("spring-button")
const heading = document.getElementById("spring-heading")


button.onclick = spring

function spring() {
  button.style.backgroundColor = "lightgreen"
  reveal()
}


function reveal() {
heading.innerHTML = "Smell the Flowers";
}

