const listOfStudents = [
  { name: 'Bruno', firstScore: 8, secondScore: 10 },
  { name: 'Amanda', firstScore: 3, secondScore: 8 },
  { name: 'Ricardo', firstScore: 1, secondScore: 4 },
  { name: 'Jéssica', firstScore: 9, secondScore: 9 },
  { name: 'Victor', firstScore: 6, secondScore: 5 },
]

for (let student of listOfStudents) {
  const average = calcAverage(student.firstScore, student.secondScore)

  if (isApproved(average)) {
    alert(`A média do(a) aluno ${student.name} é: ${average}\n\nParabéns, ${student.name}! Você foi approvado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno ${student.name} é: ${average}\n\nNão foi desta vez, ${student.name}! Tente novamente!`)

  }
}

/* Funções Auxiliares */
function isApproved(average) {
  return ((average >= 7) ? true : false)
}

function calcAverage(score1, score2) {
  return ((score1 + score2) / 2).toFixed(1)
}