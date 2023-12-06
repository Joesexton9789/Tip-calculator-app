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

function displayCalculations(e) {
  e.preventDefault()

  let tipPercent = parseFloat(form.tip.value)
  let billAmount = parseFloat(bill.value)
  let personAmount = parseFloat(numberOfPeople.value)
  let tip = (billAmount * tipPercent) / personAmount.toFixed(2)
  let total = parseFloat((billAmount + tip) / personAmount)
  console.log(billAmount)
  console.log(tip)
  console.log(personAmount)
  console.log((billAmount + tip) / personAmount)

  if (personAmount && billAmount && tipPercent) {
    totalAmount.innerText = `$${total.toFixed(2)}`
    tipAmount.innerText = `$${tip.toFixed(2)}`
  } else {
    totalAmount.innerText = '$0.00'
  }
}

function getTipPerPerson(tip) {
  const tipTotal = parseFloat
}

function getTotalPerPerson(bill, people, tip) {
  return Number.parseFloat((bill + tip) / people).toFixed(2)
}

function showError(label, message) {
  const smallText = label.querySelector('small')
  smallText.innerText = message
}

function checkValidInputOnBill(e) {
  e.preventDefault()

  const validInputs = /[0-9]/g
  const input = bill.value
  if (!validInputs.test(e.key) && e.key !== '.' && e.key !== 'Backspace') {
    billSmallTag.style.visibility = 'visible'
    showError(label2, 'Invalid Input, use only numbers.')
    bill.style.outlineColor = 'orange'
    bill.removeEventListener('keyup', checkValidInputOnBill)
  } else {
    bill.addEventListener('keyup', checkValidInputOnBill)
    billSmallTag.style.visibility = 'hidden'
    bill.style.outlineColor = 'hsl(172, 67%, 45%)'
  }
}

function checkValidInputOnPeople(e) {
  e.preventDefault()

  const validInputs = /[0-9]/g
  if (!validInputs.test(e.key) && e.key !== '.' && e.key !== 'Backspace') {
    smallTag.style.visibility = 'visible'
    showError(label, 'Invalid Input')
    numberOfPeople.style.outlineColor = 'orange'
  } else {
    smallTag.style.visibility = 'hidden'
    numberOfPeople.style.outlineColor = 'hsl(172, 67%, 45%)'
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

form.addEventListener('keyup', displayCalculations)
bill.addEventListener('keyup', checkValidInputOnBill)
numberOfPeople.addEventListener('keyup', checkValidInputOnPeople)
resetBtn.addEventListener('click', reset)
