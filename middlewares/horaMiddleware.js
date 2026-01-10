module.exports = (req, res, next) => {
  const now = new Date()
  const minutos = now.getMinutes().toString().padStart(2, "0")
  req.horaActual = now.getHours()
  req.horaTotal = `${req.horaActual}:${minutos}`
  next()
}

