const divElements = document.getElementById('card1')
let card = '';

for (let event of events){
    if(event.date <= "2022-01-01"){
    card += ` <div class="card text-white bg-dark" style="width: 15rem;margin:.5rem;" >
        <img src="${event.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <p class="card-text">${event.date}</p>
            <p class="card-text">Price:${event.price}</p>
            <div class="contenedor">
            <a href="#" class="btn-card btn btn-danger border border-light">Detail </a>
          </div>
    </div>
</div> `
}
}
divElements.innerHTML = card
console.log(card)