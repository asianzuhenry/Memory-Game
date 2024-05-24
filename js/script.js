// Memory Game

// Varialbes
let isImaggeClicked = []
let YouLoose = 'You Loose 😫...'
let YouWin = 'You Win 😀...'

// Image Card Array
const CardArray = [
    {
        id: "1",
        title: "One",
        imgSrc: "./images/1.jpg"
    },
    {
        id: "2",
        title: "Two",
        imgSrc: "./images/2.jpg"
    },
    {
        id: "3",
        title: "Three",
        imgSrc: "./images/3.jpg"
    }
]

// PopOver
const PopOver = (msg) => {
    const pop = document.querySelector('div.pop-over')
    const Text = document.createElement('h1')
    Text.textContent = msg

    if (msg === YouWin) {
        Text.style.color = 'green'
        pop.prepend(Text)
    }
    else if (msg === YouLoose) {
        Text.style.color = 'red'
        pop.prepend(Text)
    }
    pop.style.display = 'flex'

}

// score

// Start_Game function
const StartGame = () => {
    const Body = document.querySelector('.cards-container')

    for (let i = 0; i < 2; i++) {
        CardArray.map(() => {
            const RandomCard = (CardArray.map(card => card.id))
            const rand = Math.floor(Math.random() * RandomCard.length + 1)

            CardArray.forEach(crd => {
                if (crd.id === rand.toString()) {

                    const img = document.createElement('img')
                    img.src = crd.imgSrc
                    const imgdiv = document.createElement('div')
                    imgdiv.className = 'imgdiv'

                    imgdiv.addEventListener('click', () => {
                        imgdiv.appendChild(img)
                        isImaggeClicked.push(img.src)
                        if (isImaggeClicked.length === 2) {
                            if (isImaggeClicked[0] === isImaggeClicked[1]) {
                                setTimeout(() => {
                                    PopOver(YouWin)
                                }, 1000);
                                isgameover = true
                            } else {
                                setTimeout(() => {
                                    PopOver(YouLoose)
                                }, 1000);
                                isgameover = true
                            }
                        }
                    })
                    Body.prepend(imgdiv)
                }
            })
        })
    }
}

// init_game
document.addEventListener('DOMContentLoaded', () => StartGame());

