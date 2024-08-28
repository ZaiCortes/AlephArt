const events = [
    {
/**        category: 'Music', 
        title: 'GIFF',
        day: '13',
        month: 'March',
        description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
        place: 'Guanajuato',
        image: 'https://via.placeholder.com/150', */
    },
    // Agrega más eventos aquí...
];

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4'; // Cada tarjeta ocupará 1/3 del ancho del contenedor

    card.innerHTML = `
         <div class="card p-3 h-100">
            <div class="row g-0">
                <!-- Imagen -->
                <div class="col-8">
                    <img src="${event.image}" class="img-fluid" alt="event-image">
                </div>
                <div class="col-4 d-flex flex-column align-items-center justify-content-between">
                    <div class="text-center">
                        <h1 id="day" class="display-4 text-danger">${event.day}</h1>
                        <p id="month" class="text-primary">${event.month}</p>
                    </div>
                    <div class="d-flex">
                        <button class="btn btn-outline-light me-1">
                            <img src="/Inicio/assets/íconos/wishlist-star.png" width="25" height="25" alt="save-event">
                        </button>
                        <button class="btn btn-outline-light">
                            <img src="/Inicio/assets/íconos/calendar-plus.png" width="25" height="25" alt="add-event">
                        </button>
                    </div>
                </div>
            </div>
            <div class="event-details mt-3">
                <h3 class="event-title">${event.title}</h3>
                <h6 class="event-place">${event.place}.</h6>
                <p class="event-description">${event.description}</p>
                <button class="btn btn-outline-light">
                            <img src="/Inicio/assets/íconos/pen-field.png" width="25" height="25" alt="edit">
                        </button>
                <button class="btn btn-outline-light delete-event">
                            <img src="/Inicio/assets/íconos/trash.svg" width="25" height="25" alt="delete">
                        </button>
            </div>
        </div>
    `;

    eventContainer.appendChild(card);
}

// Crear los eventos inicialmente
events.forEach(createEventCard);


//Funcionalidad para borrar evento
document.querySelectorAll('.delete-event').forEach(deleteButton => {
    deleteButton.addEventListener('click', () => {
        Swal.fire({
            title: "¿Estás segur@?",
            text: "¡Una vez que elimines este evento no podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                // Eliminar la card de evento
                const card = deleteButton.closest('.card');
                card.remove();
             
                Swal.fire(
                    '¡Eliminado!',
                    'El evento ha sido eliminado.',
                    'success'
                );
            }
        });
    });
});
