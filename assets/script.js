// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Demi Zayas" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let qtyGb = 0      // Gingerbread
let qtyCc = 0      // Chocolate Chip
let qtySugar = 0   // Sugar Sprinkle
let total = qtyGb + qtyCc + qtySugar   // Total

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// update quantity for ginger bread
function updateGbQuantity(displayQuantity) {
    let qtyGb = document.querySelector('#qty-gb')
    qtyGb.innerHTML = displayQuantity 
}


// GB buttons
const minusGb = document.querySelector('#minus-gb')
const addGb = document.querySelector('#add-gb')

// add event listener to decrement GB
minusGb.addEventListener('click', function(){
    if (qtyGb > 0) {
        qtyGb--
        total-=1
    }
    updateGbQuantity(`Quantity: ${qtyGb}`)
    updateTotalQuantity(`Quantity: ${total}`)

})

// add event listener to increment GB
addGb.addEventListener('click', function(){
    qtyGb++
    total+=1
    updateGbQuantity(`Quantity: ${qtyGb}`)
    updateTotalQuantity(`Quantity: ${total}`)

})

// update quantity for CC
function updateCcQuantity(displayQuantity) {
    let qtyCc = document.querySelector('#qty-cc')
    qtyCc.innerHTML = displayQuantity 
}


// CC buttons
const minusCc = document.querySelector('#minus-cc')
const addCc = document.querySelector('#add-cc')

// add event listener to decrement CC
minusCc.addEventListener('click', function(){
    if (qtyCc > 0) {
        qtyCc--
        total-=1
    }
    updateCcQuantity(`Quantity: ${qtyCc}`)
    updateTotalQuantity(`Quantity: ${total}`)

})

// add event listener to increment CC
addCc.addEventListener('click', function(){
    qtyCc++
    total+=1
    updateCcQuantity(`Quantity: ${qtyCc}`)
    updateTotalQuantity(`Quantity: ${total}`)

})

// update quantity for Sugar
function updateSugarQuantity(displayQuantity) {
    let qtySugar = document.querySelector('#qty-sugar')
    qtySugar.innerHTML = displayQuantity 
}


// Sugar buttons
const minusSugar = document.querySelector('#minus-sugar')
const addSugar = document.querySelector('#add-sugar')

// add event listener to decrement Sugar
minusSugar.addEventListener('click', function(){
    if (qtySugar > 0) {
        qtySugar--
        total-=1
    }
    updateSugarQuantity(`Quantity: ${qtySugar}`)
    updateTotalQuantity(`Quantity: ${total}`)

})

// add event listener to increment Sugar
addSugar.addEventListener('click', function(){
    qtySugar++
    total+=1
    updateSugarQuantity(`Quantity: ${qtySugar}`)
    updateTotalQuantity(`Quantity: ${total}`)
})

// update total quantity
function updateTotalQuantity(displayQuantity) {
    let total = document.querySelector('#qty-total')
    total.innerHTML = displayQuantity 
}
