function filtrarPorFecha(fechaAc, dataEvents, pag) {
    let arrayFiltrado = []
    if (pag === "up") {
      for (evento of dataEvents) {
            if (fechaAc <= evento.date) {
                arrayFiltrado.push(evento)
            }

        }
    }else{
        for (evento of dataEvents) {
            if (fechaAc >= evento.date) {
                arrayFiltrado.push(evento)
            }

        }
    }
    return arrayFiltrado
}