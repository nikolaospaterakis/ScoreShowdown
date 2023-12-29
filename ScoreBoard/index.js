let homeSum= document.getElementById("home-sum")
let guestSum = document.getElementById("guest-sum")
let homeScore = 0
let guestScore = 0
let periodText = document.getElementById("period")
let homePlayer = document.getElementById("homePlayer")
let guestPlayer = document.getElementById("guestPlayer")
let homeTitle = document.getElementById("homeTitle")
let guestTitle = document.getElementById("guestTitle")

function add1Home() {
    homeScore += 1
    homeSum.textContent = homeScore
    pointLeader()
}

function add2Home() {
    homeScore += 2
    homeSum.textContent = homeScore
    pointLeader()
}

function add3Home() {
    homeScore += 3
    homeSum.textContent = homeScore
    pointLeader()
}

function add1Guest() {
    guestScore += 1
    guestSum.textContent = guestScore
    pointLeader()
}

function add2Guest() {
    guestScore += 2
    guestSum.textContent = guestScore
    pointLeader()
}

function add3Guest() {
    guestScore += 3
    guestSum.textContent = guestScore
    pointLeader()
}

function changePeriod() {
    console.log(periodText)
    if (periodText.innerText == "1st Period") {
        periodText.textContent = "2nd Period"
    } else if(periodText.innerText == "2nd Period"){
        periodText.textContent = "3rd Period"
    } else if(periodText.innerText == "3rd Period"){
        periodText.textContent = "4th Period"
    } else if(periodText.innerText == "4th Period"){
        periodText.textContent = "Overtime"
    }
}

function newGame() {
   homeScore = 0
   guestScore = 0
   homeSum.textContent = homeScore
   guestSum.textContent = guestScore
   periodText.textContent = "1st Period"
   pointLeader()
}

function pointLeader() {
    if ( homeScore > guestScore) {
         homeTitle.style.fontSize = "60px"
         guestTitle.style.fontSize = "40px"
    } else if ( homeScore < guestScore) {
        guestTitle.style.fontSize = "60px"
        homeTitle.style.fontSize = "40px"
    } else {
        homeTitle.style.fontSize = "40px"
        guestTitle.style.fontSize = "40px"
    }
}