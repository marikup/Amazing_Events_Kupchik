   function datosApi(){
    const obtenerDatos = fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(data =>{
      
      
const containerCard = document.getElementById('card1')
const containerCheck = document.getElementById('Check1')
const input = document.querySelector('input')
const eventos = filtrarPorFecha(data.currentDate,data.events,"up")



input.addEventListener('input',superFiltro)

containerCheck.addEventListener('change',superFiltro)


function superFiltro(){
  let eventos = filtrarPorFecha(data.currentDate,data.events,"up")
    let primerFiltro = filtrarPorTexto(eventos,input.value)
    let segundoFiltro = filtrarPorCategory(primerFiltro)
    pintarEventos(segundoFiltro)
}

pintarEventos(eventos)
crearCheckBoxes(eventos)

function crearCheckBoxes(array){

  let arrayCategories = array.map(events => events.category)
 
  let setCategory = new Set(arrayCategories)

  let arrayChecks = Array.from(setCategory)

  let checkboxes = ''
  arrayChecks.forEach(category => {
    checkboxes += `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="${category}" id="${category}" >
    <label class="form-check-label" for="${category}">
      ${category}
    </label>
  </div>`
  })
  containerCheck.innerHTML = checkboxes
  }

 function pintarEventos(array){

   if(array.length == 0){
    containerCard.innerHTML =`<h2> Lo siento, pero no encontramos ninguna coincidencia</h2>`
    return
  }

let card = ''

 array.forEach(events => {
    card += ` <div class= "card text-white bg-dark " style="width: 18rem;margin:.5rem;" >
    <div class ="card-img">
       <img src="${events.image}" class="card-img-top" alt="...">
         </div>
         <div class="card-body">
             <h5 class="card-title">${events.name}</h5>
             <p class="card-text">${events.description}</p>
             <p class="card-text">${events.date}</p>
             <p class="card-text">${events.category}</p>
             </div>
             <div class="contenedor-btn">
             <p class="card-text-price"><i class="bi bi-tag-fill"></i> Price:${events.price}</p>
          <a href="./details.html?id=${events._id}" class="btn-card btn btn-danger border border-light">Detail </a>
          </div>
 </div> `
  })

  containerCard.innerHTML = card

}

function filtrarPorTexto(array,texto){
  let arrayFiltrado = array.filter(events => events.name.toLowerCase().includes(texto.toLowerCase()))
  return arrayFiltrado
}

function filtrarPorCategory(array){
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  console.log(checkboxes);
  let arrayChecks = Array.from(checkboxes)
 let arrayChecksChecked= arrayChecks.filter(check => check.checked)
console.log(arrayChecksChecked);
let arrayChecksCheckedValues = arrayChecksChecked.map(
  checksChecked => checksChecked.value)
  let arrayFiltrado = array.filter(elemento => arrayChecksCheckedValues.includes(elemento.category))
  console.log(arrayFiltrado);
  if(arrayChecksChecked.length > 0){
      return arrayFiltrado
  }
  return array
}


})
.catch(error => console.log(error));
}
datosApi()


