const bill = document.getElementById('bill')
const form = document.getElementById('form')
const numberOfPeople = document.getElementById('number_people')
const tipAmount = document.getElementById('tip_amount')
const totalAmount = document.getElementById('total_amount')
const resetBtn = document.querySelector('.btn')
const label = document.getElementById('people')
const label2 = document.getElementById('bill_label')
const smallTag = label.querySelector('small')
const billSmallTag = label2.querySelector('small')
const radio = document.querySelectorAll("input[type='radio']")

let billTotal
let total
let tip
let people

function getTotal() {
  billTotal = parseFloat(bill.value)
  people = parseFloat(numberOfPeople.value)
  tip = parseFloat(form['tip'].value * billTotal)
  total = parseFloat((billTotal + tip) / people).toFixed(2)
  console.log(billTotal)
  console.log(people)
  console.log(tip)

  console.log(total)
  if (isNaN(total)) {
    totalAmount.innerText = '$0.00'
  } else {
    tipAmount.innerText = `$${parseFloat(tip / people).toFixed(2)}`
    totalAmount.innerText = `$${total}`
  }
}

function checkValidInputOnBill() {
  if (isNaN(bill.value)) {
    bill.style.outlineColor = 'orange'
    billSmallTag.innerText = 'Invalid input.'
    billSmallTag.style.visibility = 'visible'
  } else {
    bill.style.outlineColor = 'hsl(172, 67%, 45%)'
    billSmallTag.innerText = ''
    billSmallTag.style.visibility = 'hidden'
  }
}

function checkValidInputOnPeople() {
  if (isNaN(numberOfPeople.value)) {
    numberOfPeople.style.outlineColor = 'orange'
    smallTag.innerText = 'Invalid input.'
    smallTag.style.visibility = 'visible'
  } else {
    numberOfPeople.style.outlineColor = 'hsl(172, 67%, 45%)'
    smallTag.innerText = ''
    smallTag.style.visibility = 'hidden'
  }
}

function reset() {
  smallTag.style.visibility = 'hidden'
  numberOfPeople.style.outlineColor = 'hsl(172, 67%, 45%)'
  billSmallTag.style.visibility = 'hidden'
  bill.style.outlineColor = 'hsl(172, 67%, 45%)'
  numberOfPeople.value = ''
  bill.value = ''
  tipAmount.innerText = '$0.00'
  totalAmount.innerText = '$0.00'
}

bill.addEventListener('input', checkValidInputOnBill)
numberOfPeople.addEventListener('input', checkValidInputOnPeople)
resetBtn.addEventListener('click', reset)
form.addEventListener('input', getTotal)
