let count1 = document.getElementById("count1")
let count2 = document.getElementById("count2")
let homecount = 0
let guestcount = 0

function increment () {
    homecount += 1
    count1.textContent = homecount
}

function increment2 () {
    homecount += 2
    count1.textContent = homecount
}

function increment3 () {
    homecount += 3
    count1.textContent = homecount
}

function increment4 () {
    guestcount += 1
    count2.textContent = guestcount
}

function increment5 () {
    guestcount += 2
    count2.textContent = guestcount
}

function increment6 () {
    guestcount += 3
    count2.textContent = guestcount
}
