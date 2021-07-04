const calculatorScreen = document.querySelectorAll('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

const inputNumber = (number) =>{

    if (currentNumber === '0') {
        currentNumber = number

    }else
    currentNumber += number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
