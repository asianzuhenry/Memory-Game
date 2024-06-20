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

const loadFirstScreen = () => {
    const Main = document.querySelector('.main')
    const FirstScreen = document.createElement('div')
    const Side1 = document.createElement('div')
    const Side2 = document.createElement('div')
    const Side1Img = document.createElement('img')
    const Side2h2 = document.createElement('h2')
    const Side2btn = document.createElement('button')

    FirstScreen.className = 'first-screen'
    Side1.className = 'side1'
    Side2.className = 'side2'

    Side1Img.src = '../images/favicon.ico'
    Side1Img.alt = 'images'

    Side2h2.innerText = 'Let`s Play'
    Side2btn.innerText = 'Play Now'

    Side2btn.addEventListener('click', () => { createWrapperCon(), removeFirstScreen(), StartGame() })

    Side1.appendChild(Side1Img)
    Side2.append(Side2h2, Side2btn)

    FirstScreen.append(Side1, Side2)
    if (document.querySelector('.cards-container')) {
    const Body = document.querySelector('.cards-container')
    Body.remove()
        
    }

    Main.prepend(FirstScreen)
}



const removeFirstScreen = () => {
    const Main = document.querySelector('.main')
    const FirstScreen = document.querySelector('.first-screen')
    Main.removeChild(FirstScreen)
}


// Start_Game function
const StartGame = () => {
    isImaggeClicked = []
    const Body = document.querySelector('.cards-container')

    const Body2 = document.createElement('div')
    Body2.className = 'cards-container'
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
                                }, 500);
                                isgameover = true
                            } else {
                                setTimeout(() => {
                                    PopOver(YouLoose)
                                }, 500);
                                isgameover = true
                            }
                        }
                    })
                    Body2.prepend(imgdiv)
                    Body.replaceWith(Body2)
                }
            })
        })
    }
}


// score


// Replay
const Replay = () => {
    const pop = document.querySelector('div.pop-over')
    pop.style.visibility = 'hidden'
    StartGame()
}
const Quite = () => {
    const pop = document.querySelector('div.pop-over')
    pop.style.visibility = 'hidden'
    loadFirstScreen()
}


// PopOver
const PopOver = (msg) => {
    const pop = document.querySelector('div.pop-over')
    const popScore = document.querySelector('div.pop-over .score')
    const Text = document.createElement('h1')
    Text.textContent = msg

    popScore.append(Text)

    if (msg === YouWin) {
        Text.style.color = 'green'
        popScore.replaceChildren(Text)
    }
    else if (msg === YouLoose) {
        Text.style.color = 'red'
        popScore.replaceChildren(Text)
    }
    pop.style.visibility = 'visible'

}


const CreatePopOver = () => {
const WrapperCon = document.querySelector('.wrapper-con')

const popdiv = document.createElement('div')
const scorediv = document.createElement('div')
const buttonsdiv = document.createElement('div')
const button1 = document.createElement('button')
const button2 = document.createElement('button')

popdiv.className = 'pop-over'
scorediv.className = 'score'
buttonsdiv.className = 'buttons'
button1.className = 'quite'
button1.innerText = 'Quite'
button2.className = 'replay'
button2.innerText = 'Replay'

button1.addEventListener('click', () => {Quite()})
button2.addEventListener('click', () => {Replay()})

buttonsdiv.append(button1, button2)
popdiv.append(scorediv, buttonsdiv)

WrapperCon.prepend(popdiv)

}

const createWrapperCon = () => {
    const Main = document.querySelector('.main')
    const Wrapper = document.createElement('div')
    const cardsCon = document.createElement('div')

    Wrapper.className = 'wrapper-con'
    cardsCon.className = 'cards-container'

    Wrapper.append(cardsCon)

    Main.prepend(Wrapper)

CreatePopOver()
}


// init_game
document.addEventListener('DOMContentLoaded', () => loadFirstScreen());

