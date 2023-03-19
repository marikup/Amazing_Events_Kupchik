
//console.log(eventsId)

/*const eventsNew = eventsId.map(events => {
    let aux = {}
    aux.image = events.image
    aux.name = events.name
    aux.date = events.date
    aux.description = events.description
    aux.category = events.category
    aux.place = events.place
    aux.capacity = events.capacity
    aux.assistance = events.assistance
    aux.price = events.price
   
    return aux
})*/
//console.log(eventsNew)

const querySearch = document.location.search
//console.log(querySearch)
const id = new URLSearchParams(querySearch).get("id")
const eventsId = data.events.filter(events => events._id == id)
console.log(eventsId)
let eventDetail = eventsId[0]
const cardDetails = document.getElementById("cardDetails")
console.log(cardDetails)
cardDetails.innerHTML = `<div class=" d-flex flex-column justify-content-center align-items-center card-detail col-sm-6 col-lg-6  g-2" >
<img src=${eventDetail.image} class="img-details" alt="">
<div class=" d-flex flex-column justify-content-center align-items-center card-body col-sm-6 col-lg-6 ">
   <h5 class="card-title">Name: ${eventDetail.name}</h5>
<p class="card-text">Description:${eventDetail.description} </p>
    <p class="card-text">Date:${eventDetail.date} </p>
    <p class="card-text">Price:${eventDetail.price} </p>
    <p class="card-text">Place:${eventDetail.place}</p>
    <p class="card-text">Capacity:${eventDetail.capacity}</p>
   
    </div>
</div>`

