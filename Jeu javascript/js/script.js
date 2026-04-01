// alert()

/**
 * pierre = 1
 * feuille = 2
 * ciseaux = 3
 * spock = 4
 * lézard = 5
 */

let symbole = [
    "pierre",
    "feuille",
    "ciseaux",
    "spock",
    "lezard"
]

let bigBang = [
    {
        "pierre" : "null",
        "feuille" : "lost",
        "ciseaux" : "win",
        "spock" : "lost",
        "lezard" : "win"
    },
    {
        "pierre" : "win",
        "feuille" : "null",
        "ciseaux" : "lost",
        "spock" : "win",
        "lezard" : "lost"
    },
    {
        "pierre" : "lost",
        "feuille" : "win",
        "ciseaux" : "null",
        "spock" : "lost",
        "lezard" : "win"
    },
    {
        "pierre" : "win",
        "feuille" : "lost",
        "ciseaux" : "win",
        "spock" : "null",
        "lezard" : "lost"
    },
    {
        "pierre" : "lost",
        "feuille" : "win",
        "ciseaux" : "lost",
        "spock" : "win",
        "lezard" : "null"
    }
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let play = document.querySelector('#player')
let averse = document.querySelector('#adversaire')
let denoue = document.querySelector('#jouer')

let resulat = (nb) => {
    let nb2 = getRandomInt(0,4)
    console.log(nb2)
    let adv = symbole[nb2]
    console.log(adv)
    let partie = bigBang[nb][adv]
    console.log(partie)
    if (bigBang[nb][adv] === "win"){
        play.textContent = Number(play.textContent) + 1
    }
    else if (bigBang[nb][adv] === "lost"){
        averse.textContent = Number(averse.textContent) + 1
    }
    denoue.innerHTML = `<p>Vous avez joué <strong>${symbole[nb]}</strong> et votre adversaire a joué <strong>${adv}</strong></p>`
}

let photos = document.querySelectorAll('img')
for (let i=0; i<photos.length; i++){
    photos[i].id = `image${i}`
}

let img1 = document.querySelector('#image0')
img1.addEventListener('click', () => {resulat(0)})

let img2 = document.querySelector('#image1')
img2.addEventListener('click', () => {resulat(1)})

let img3 = document.querySelector('#image2')
img3.addEventListener('click', () => {resulat(2)})

let img4 = document.querySelector('#image3')
img4.addEventListener('click', () => {resulat(3)})

let img5 = document.querySelector('#image4')
img5.addEventListener('click', () => {resulat(4)})



let reglesDuJeu = document.querySelector('#regles')
let show = false
let rules = () => {
    if (show === true){
        reglesDuJeu.innerHTML = `<p>Choisissez une image parmi les cinq proposées.<br> Voici les solutions dépendant du choix que vous et votre adversaire, l'ordinateur, faites :</p>
        <ul>
            <li>Les <strong>ciseaux</strong> coupent le <strong>papier</strong></li>
            <li>Le <strong>papier</strong> bat la <strong>pierre</strong></li>
            <li>La <strong>pierre</strong> écrase le <strong>lézard</strong></li>
            <li>Le <strong>lézard</strong> empoisonne <strong>Spock</strong></li>
            <li><strong>Spock</strong> écrabouille les <strong>ciseaux</strong></li>
            <li>Les <strong>ciseaux</strong> décapitent le <strong>lézard</strong></li>
            <li>Le <strong>lézard</strong> mange le <strong>papier</strong></li>
            <li>Le <strong>papier</strong> repousse <strong>Spock</strong></li>
            <li><strong>Spock</strong> détruit la <strong>pierre</strong></li>
            <li>La <strong>pierre</strong> bat les <strong>ciseaux</strong></li>
        </ul>
        <p>Pour réinitialiser la partie, vous devez rafraichir la page.</p>`
    }
    else {
        reglesDuJeu.textContent = ""
    }
}

let clique = () => {
    if (show === true){
        show = false
    }
    else {
        show = true
    }
    rules()
}

let bouton = document.querySelector('button')
bouton.addEventListener('click', () => {clique()})