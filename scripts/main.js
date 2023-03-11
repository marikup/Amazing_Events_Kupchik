const containerCard = document.getElementById('card1')
let card = '';

for (evento of data.events) {
    card += ` <div class="card text-white bg-dark " style="width: 18rem;margin:.5rem;" >
   <div class ="card-img">
      <img src="${evento.image}" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <p class="card-text">${evento.date}</p>
            </div>
            <div class="contenedor-btn">
            <p class="card-text-price"><i class="bi bi-tag-fill"></i> Price:${evento.price}</p>
         <a href="#" class="btn-card btn btn-danger border border-light">Detail </a>
         </div>
</div> `
}
containerCard.innerHTML = card
console.log(card)