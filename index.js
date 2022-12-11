document.addEventListener("DOMContentLoaded", function() {});

//getting content from json
 fetch('http://localhost:3000/films')
.then(res => res.json())
.then(film => film.forEach(films=> getFilms(films)))

function showNo1Film(){
    fetch('http://localhost:3000/films/1')
    .then(res => res.json())
    .then(console.log('osborne mf'))

}


// function to add content to the webpage
function getFilms(films){

    let availableTickets= films.capacity - films.tickets_sold

    let list= document.createElement('ul')
    list.innerHTML=`
    <button>${films.title}</button>`

    let container = document.createElement('info')
            container.innerHTML =`
                   <h3>${films.title}<h3>
                   <img src="${films.poster}">
                   <h3>Description:</h3>
                   <p>${films.description}</p>
                   <h3>Runtime: </h3>
                   <p>"${films.runtime} minutes"</p>
                   <h3<Time:${films.showtime}<h3>`


     

     const ticketData = document.createElement('h3') 
     ticketData.innerHTML =`Available Tickets: ${availableTickets}`
     container.appendChild(ticketData)          

    const ticketBtn = document.createElement('button')
    ticketBtn.innerHTML= `GET TICKETS!!`
    container.appendChild(ticketBtn)
      
    ticketBtn.addEventListener('click', handleTicks)
    list.addEventListener('click', handleClick)


// function to handle click event for purchasing ticket
    function handleTicks(e){
        if(availableTickets >= 1) {
       
            availableTickets --
         
            ticketData.innerHTML = `Available Tickets: ${availableTickets}`
       
            console.log(availableTickets)
      }else if(availableTickets < 1){
           ticketData.innerHTML = `Sorry :(, Tickets Sold Out`
           e.target.remove()
    }
    }


 // function to handle click event for showing selected movie details   
    function handleClick(){
        fetch('http://localhost:3000/films')
        .then(res => res.json())
        .then(console.log('got films'))

        
        document.querySelector('#movie-details').appendChild(container) 
    }

   document.querySelector('#films').appendChild(list)
}