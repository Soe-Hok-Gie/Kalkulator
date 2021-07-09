const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    console.log(number)
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
let currentNumber='0';
const inputNumber = (number) =>{
    if (currentNumber === '0') {
        currentNumber = number
    }else{
        currentNumber += number
    }
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
        result = parseInt (prevNumber) + parseInt (currentNumber)
        break
    case "-":
        result = parseInt (prevNumber) - parseInt (currentNumber)
        break
    case "*":
        result = parseInt (prevNumber) * parseInt (currentNumber)
        break
    case "/":
        result = parseInt (prevNumber) / parseInt (currentNumber)
        break
    default:
        return
    }
    currentNumber = result
    calculationOperator =''
}