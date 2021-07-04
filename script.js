const calculatorScreen = document.querySelectorAll('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

const inputNumber = (number) =>{
    currentNumber = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
