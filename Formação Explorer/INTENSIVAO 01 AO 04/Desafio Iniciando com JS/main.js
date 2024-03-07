run()


/* PRINCIPAL */
function run() {
  let input
  let isValidOpt = false
  while (!isValidOpt) {

    input = showMenu()
    let isNumeric = isNumber(input)

    while (!isNumeric) {
      input = showMenu('error')
      isNumeric = isNumber(input)
    }
    isValidOpt = isValidOption(input)
  }
  let newInput
  let inputIsType
  let values
  let total
  switch (input) {
    case '1':
      alert('Hello World!')
      break
    case '2':
      values = promptTwoNumbers()
      total = sum(values)
      alert(`A soma dos valores ${values[0]} + ${values[1]} = ${total}`)
      break
    case '3':
      newInput = promptValue()
      inputIsType = isNumber(newInput);
      (inputIsType) ? alert('É um número') : alert('Não é um número')
      break
    case '4':
      newInput = promptValue()
      inputIsType = isString(newInput);
      (inputIsType) ? alert('É uma string') : alert('Não é uma string')
      break
    case '5':
      newInput = promptValue()
      inputIsType = isBoolean(newInput);
      (inputIsType) ? alert('É um Boolean') : alert('Não é um Boolean')
      break
    case '6':
      values = promptTwoNumbers()
      total = sub(values)
      alert(`A subtração dos valores ${values[0]} - ${values[1]} = ${total}`)
      break
    case '7':
      values = promptTwoNumbers()
      total = multi(values)
      alert(`A multiplicação dos valores ${values[0]} * ${values[1]} = ${total}`)
      break
    case '8':
      values = promptTwoNumbers()
      total = division(values)
      alert(`A divisão dos valores ${values[0]} / ${values[1]} = ${total}`)
      break
    case '9':
      newInput = promptValue()
      let isEvenOrOdd = evenOrOdd(newInput)
      if (isEvenOrOdd === true) {
        alert(`É um número par`)
      } else if (isEvenOrOdd === false) {
        alert(`É um número ímpar`)
      } else {
        alert(`Não é um número válido`)
      }
      break
    default:
      break
  }
}


/* FUNÇÕES AUXILIARES */
function showMenu(type = 'default') {
  const menuHeader = (type === 'default') ? 'Escolha o programa a executar' : 'Não entendi. Por favor, digite uma das opções abaixo'
  return prompt(`${menuHeader}:
    1. Hello World!
    2. Soma de dois valores
    3. Verifica se é número
    4. Verifica se é string
    5. Verifica se é boolean
    6. Subtração de dois valores
    7. Multiplicação de dois valores
    8. Divisão de dois valores
    9. Verifica se é par ou ímpar
    10. Sair\n`)
}

function isValidOption(input) {
  return (input >= 1 && input <= 10)
}

function isNumber(input) {
  let number = Number(input)
  return (isNaN(number)) ? false : true
}

function isString(input) {
  let isANumber = isNumber(input)
  return (!isANumber) ? true : false
}

function isBoolean(input) {
  input = input.toLowerCase()
  if (input === 'true' || input === 'false') {
    return true
  } else {
    return false
  }
}

function promptValue() {
  var value = prompt('Digite algo:')
  return value
}

function promptTwoNumbers() {
  let isNumeric01 = false
  while (!isNumeric01) {
    var number1 = prompt('Digite o primeiro número:')
    isNumeric01 = isNumber(number1)
  }
  let isNumeric02 = false
  while (!isNumeric02) {
    var number2 = prompt('Digite o segundo número:')
    isNumeric02 = isNumber(number2)
  }
  return [number1, number2]
}

function sum(twoValues) {
  return twoValues[0] + twoValues[1]
}

function sub(twoValues) {
  return twoValues[0] - twoValues[1]
}

function multi(twoValues) {
  return twoValues[0] * twoValues[1]
}

function division(twoValues) {
  return twoValues[0] / twoValues[1]
}

function evenOrOdd(input) {
  if (isNumber(input)) {
    return ((input % 2) === 0) ? true : false
  } else {
    return 'error'
  }

}

