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

const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
    prevNumber =currentNumber
    calculationOperator = operator
    currentNumber = ''

}

operators.forEach((operator) => {
operator.addEventListener("click",(event)=> {
    console.log (event.target.value)
})
})

const equalSign = document.querySelector('.equal-Sign')

equalSign.addEventListener('click', () => {

    calculate ()
    updateScreen (currentNumber)
})

const calculate = () => {
    let result = ''

    switch (calculationOperator){

    case "+":
        result = prevNumber + currentNumber
        break
    case "-":
        result = prevNumber - currentNumber
        break
    case "*":
        result = prevNumber * currentNumber
        break
    case "/":
        result = prevNumber / currentNumber
        break
    default:
        return
    }
    currentNumber = result
    calculationOperator =''
}