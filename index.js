// this script is to count headcounts by incrementing one by a hit. It can save the entry each time and display the previous entries. Total of counts is also showing.
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let num = 0
let total = 0

function increment() {
    count += 1
    total += 1
    countEl.textContent = count
    totalEl.textContent = "Total: "+ total
}

function save() {
    let countStr
    let totalStr = total
    if(num < 1)
        countStr = count
    else
        countStr = " - " + count
    
    saveEl.textContent += countStr
    totalEl.textContent = "Total: " + totalStr
    countEl.textContent = 0
    count = 0
    num += 1
}
