const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    console.log(number)
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
    let prevNumber = ''
    let calculationOperator = ''
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
    inputOperator(event.target.value)
})
})

const equalSign = document.querySelector('.equal-Sign')

equalSign.addEventListener('click', () => {

    calculate ()
    updateScreen (currentNumber)
})

const calculate = () => {
    let result = ''
    console.log (calculationOperator)
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

const clearBtn = document.querySelector ('.all-clear')

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber='0';
    
}

clearBtn.addEventListener ('click', ()=> {
    clearAll ()
    updateScreen (currentNumber)
})

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log (event.target.value)
})
