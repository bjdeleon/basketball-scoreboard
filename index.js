let totalPointHome = document.getElementById("scoreHome-el")
let totalPointAway = document.getElementById("scoreAway-el")

let countHome = 0
let countAway = 0

function onePoint() {
    countHome += 1
    totalPointHome.textContent = countHome
}

function twoPoint() {
    countHome += 2
    totalPointHome.textContent = countHome
}

function threePoint() {
    countHome += 3
    totalPointHome.textContent = countHome
}

//    HOME UP     AWAY DOWN


function onePointAway() {
    countAway += 1
    totalPointAway.textContent = countAway
}

function twoPointAway() {
    countAway += 2
    totalPointAway.textContent = countAway
}

function threePointAway() {
    countAway += 3
    totalPointAway.textContent = countAway
}