function vitoria() {
  pincel.beginPath()
  pincel.fillStyle = 'green'
  pincel.font = "bold 40px 'Inter'"
  pincel.fillText('Parabens,', 405, 100)
  pincel.fillText('Você é o Campeão!', 405, 150)
}

function derrota() {
  pincel.beginPath()
  pincel.fillStyle = 'red'
  pincel.font = "bold 40px 'Inter'"
  pincel.fillText('Game Over!', 405, 100)
  pincel.fillText('Você  foi derrotado!', 405, 150)
}
