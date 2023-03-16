
/*const params = new URLSearchParams(location.search)
const id = params.get("id")
let detalleCard = data.events.find(element => element._id === id)
console.log(detalleCard)
const $detalle = document.getElementById("detalle")*/

const containerCardd = document.querySelector("#cardd");
let params = (new URL(document.location)).searchParams;
let cardId = params.get("id");









function crearCardDetails(arrayDataEvents, id) {
    let containerCardd = ``;
    const event = arrayDataEvents.find(event => event._id == id)
        const eventDate = event.date;   
        containerCardd +=`

    div class="container-detail" style="padding: 2.25rem;" >
    <img src="${event.image}" class="card-details" alt="..." style="width: 20rem; margin-top: 2rem;border-radius: 2rem;">
      <div class="card-detail col-sm-6 col-lg-6  g-2">
      </div>
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
    <p class="card-text">Description: ${event.description}</p>
    <p class="card-text">Date: ${event.date}</p>
    <p class="card-subtitle mb-2 text-muted">${event.category}</p>
    <p class="card-text">Place: ${event.place}</p>
    <p class="card-text">Capacity: ${event.capacity}</p>
    <p class="card-text">${event.assistance}</p>
    <p class="card-text">Price: ${event.price}</p>
    <a href="./details.html?id=${event._id}" class="card-link">More Info</a>
</div>
</div>`;
return containerCardd
}

containerCardd.innerHTML = crearCardDetails(data.event, cardId)
