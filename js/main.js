document.addEventListener("DOMContentLoaded", function () {
  // Seção Menu
  const menuBtnHeader = document.querySelector(".btn-group-vertical")
  menuBtnHeader.classList.remove("btn-group-vertical")

  // Seção header
  const headerText = document.querySelector(".jumbotron")
  headerText.classList.add("text-right")
  headerText.querySelector(".btn").classList.add("btn-success")

  // Seção Card
  const Containers = document.querySelectorAll(".row")
  const cardsContainer = Containers[2]
  const cardsGroup = document.querySelectorAll(".row .col-lg-3")

  const removedCards = []
  cardsGroup.forEach((card) => {
    removedCards.push(card)
    cardsContainer.removeChild(card)
  })

  cardsContainer.appendChild(removedCards[3])
  cardsContainer.appendChild(removedCards[0])
  cardsContainer.appendChild(removedCards[2])
  cardsContainer.appendChild(removedCards[1])

  cardsGroup.forEach((card, i) => {
    if (i === 0) {
      card.querySelector(".card a").classList.add("btn-success")
    }
  })

  // Seção Lista

  const list = document.querySelector(".list-group")
  const item1 = document.querySelector(".list-group-item:nth-child(1)")
  const item4 = document.querySelector(".list-group-item:nth-child(4)")
  const item5 = document.querySelector(".list-group-item:nth-child(5)")

  item1.classList.remove("active")

  if (!item4) {
    const novoItem4 = document.createElement("li")
    novoItem4.classList.add("list-group-item")
    novoItem4.classList.add("active")
    novoItem4.textContent = "Quarto item"
    list.appendChild(novoItem4)
  }

  if (!item5) {
    const novoItem5 = document.createElement("li")
    novoItem5.classList.add("list-group-item")
    novoItem5.textContent = "Quinto item"
    list.appendChild(novoItem5)
  }
})
