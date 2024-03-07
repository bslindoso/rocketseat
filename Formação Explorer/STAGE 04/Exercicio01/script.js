const numberOne = checkValidNumber()
const numberTwo = checkValidNumber('segundo')
const operators = ['+', '-', '*', '/', '%']

if (numberOne === numberTwo) {
  alert('Opa, os dois números informados são iguais.')
}

for (let operator of operators) {
  let result = calcByOperator(numberOne, numberTwo, operator)
  alert(`O cálculo ${numberOne} ${operator} ${numberTwo} = ${result}`)

  if (operator === '+') {
    alert(`A soma dos números é ${evenOrOdd(result)}`)
  }
}

/* Funções auxiliares */
function checkValidNumber(position = 'primeiro') {
  let number = NaN
  while (isNaN(number)) {
    number = Number(prompt(`Digite o ${position} número:`))
    if (isNaN(number)) {
      alert('Digite um número válido')
    }
  }
  return number
}

function calcByOperator(numberOne, numberTwo, operator) {
  switch (operator) {
    case '+':
      return numberOne + numberTwo
    case '-':
      return numberOne - numberTwo
    case '*':
      return numberOne * numberTwo
    case '/':
      return numberOne / numberTwo
    case '%':
      return numberOne % numberTwo
  }
}

function evenOrOdd(number) {
  return ((number % 2) === 0) ? 'par' : 'ímpar'
}