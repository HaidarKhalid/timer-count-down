const secInp = document.getElementById("sec-inp")
const minInp = document.getElementById("min-inp")
const houInp = document.getElementById("hou-inp")

const secOut = document.getElementById("sec-out")
const minOut = document.getElementById("min-out")
const houOut = document.getElementById("hou-out")

const startBtn = document.getElementById("start-btn")

const doneEl = document.getElementById("done-el")

 
function start() {
    var secStorage = localStorage.setItem("secounds", secInp.value)
    var minStorage = localStorage.setItem("minutes", minInp.value)
    var houStorage = localStorage.setItem("hours", houInp.value)
}
let secound = localStorage.getItem("secounds")
let minute = localStorage.getItem("minutes")
let hour = localStorage.getItem("hours")

let canStart = true;

secOut.innerText = secound
minOut.innerText = minute
houOut.innerText = hour
startBtn.addEventListener("click", function begin() {
    if (canStart == true) {
    showSec(localStorage.getItem('secounds'))
    canStart = false
    doneEl.innerText = ""
    } else {
        console.log("you cant start while the timer is running")
    }
})

function showSec(s) {
    if (s > 0) {
        setTimeout(function add() {
            s-- 
            showSec(s)
        }, 1000)
        secOut.innerText = s
    } else {
        secOut.innerText = 0
        showMin(minute)
    }
}

function showMin(m) {
    if (m >= 1) {
    m--
    minute = m
    minOut.innerText = m
    showSec(60)
}  else  {   
        minOut.innerText = 0
        showHou(hour)
}
}

function showHou(h) {
    if (minOut.innerText == 0 && h > 0) {
        h--
        hour = h
        houOut.innerText = h
        console.log(h)
        showMin(60)
    }  else {
        houOut.innerText = 0
        doneEl.innerText = "Done!"
        canStart = true;
    }

}

function clear() {
    localStorage.removeItem("secounds")
    localStorage.removeItem("minutes")
    localStorage.removeItem("hours")
}