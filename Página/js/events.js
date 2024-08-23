const events = [
    {
        id: 1,
        image: "https://cdn.pixabay.com/photo/2017/08/01/21/02/people-2567965_1280.jpg",
        event_title: 'Rock Fest',
        description: 'Concierto de rock en el estadio Azteca, ven a disfrutar el tributo a las leyendas del rock.',
        day: '16',
        month: 'Marzo',
        place: 'Estadio Azteca',
    },

    {
        id: 2,
        event_title: 'Feria del Libro',
        image: "https://cdn.pixabay.com/photo/2020/04/17/08/03/books-5053733_1280.jpg",
        description: 'Esta feria es conocida por contar con una extensa oferta desde libros de entretenimiento, religión, infantiles, adolescentes, ciencia y técnica, libros de arte, ...',
        day: '30',
        month: 'Abril',
        place: 'Explanada Zócalo',
    }
];

const eventContainer = document.querySelector(".event-container");
console.log('Event container:', eventContainer); //Verifico mi elemento creado

function createEventCard(event) {

    console.log('Creating card for event:', event); // Volvemos a verificar

    const card = document.createElement("div"); // Aquí definimos la tarjeta
    card.classList.add("card");

    const cardImgContainer = document.createElement("div"); //Creamos el contenedor de la imagen a mostrar.
    cardImgContainer.classList.add("card-image-container");

    const imageElement = document.createElement("img"); //Creamos una constante que llame a la imagen
    imageElement.src = event.image || "https://via.placeholder.com/150"; // Usamos una imagen de placeholder si no hay imagen disponible
    imageElement.alt = "Event photo";
    cardImgContainer.appendChild(imageElement); //Función para que la imagen aparezca en el contenedor correspondiente.

    const eventTitleElement = document.createElement("h3");
    eventTitleElement.classList.add("event_title");
    eventTitleElement.textContent = event.event_title;

    const eventDescElement = document.createElement("p");
    eventDescElement.textContent = `Description: ${event.description}`;

    const cardDayElement = document.createElement("p");
    cardDayElement.textContent = `Día: ${event.day}`;

    const cardMonthElement = document.createElement("p");
    cardMonthElement.textContent = event.month;

    card.append(cardImgContainer, eventTitleElement, eventDescElement, cardDayElement, cardMonthElement);
    eventContainer.appendChild(card);
}

events.forEach(createEventCard);