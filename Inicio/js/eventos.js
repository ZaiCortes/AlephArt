const events = [
    {
        category: 'Music', 
        title: 'GIFF',
        day: '13',
        month: 'March',
        description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
        place: 'Guanajuato',
        image: 'https://via.placeholder.com/150',
    },
    // Agrega más eventos aquí...
];

const eventContainer = document.getElementById('eventContainer');

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4'; // Cada tarjeta ocupará 1/3 del ancho del contenedor

    card.innerHTML = `
         <div class="card p-3 h-100">
            <div class="row g-0">
                <!-- Imagen -->
                <div class="col-8">
                    <img src="${event.image}" class="img-fluid" alt="Imagen">
                </div>
                <div class="col-4 d-flex flex-column align-items-center justify-content-between">
                    <div class="text-center">
                        <h1 id="day" class="display-4 text-danger">${event.day}</h1>
                        <p id="month" class="text-primary">${event.month}</p>
                    </div>
                    <div class="d-flex">
                        <button class="btn btn-outline-light me-1">
                            <img src="/assets/íconos/wishlist-star.png" width="25" height="25">
                        </button>
                        <button class="btn btn-outline-light">
                            <img src="/assets/íconos/calendar-plus.png" width="25" height="25">
                        </button>
                    </div>
                </div>
            </div>
            <div class="event-details mt-3">
                <h3 class="event-title">${event.title}</h3>
                <h6 class="event-place">${event.place}.</h6>
                <p class="event-description">${event.description}</p>
            </div>
        </div>
    `;

    eventContainer.appendChild(card);
}

// Crear los eventos inicialmente
events.forEach(createEventCard);
