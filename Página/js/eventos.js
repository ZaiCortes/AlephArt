//Declaramos una constante para declarar los eventos con fines demostrativos:
/**
 * const events = [
    {
        id: 1,
        category: 'Painting', 
        title: 'Clase muestra de pintura',
        day: '24',
        month: 'Agosto',
        description: 'Descubre tu lado artístico en nuestro taller de pintura. Explora técnicas y materiales, comparte tu creatividad y aprende de otros. ¡No te lo pierdas!',
        place: 'CDMX',
        image: '/assets/img-events/Clase de pintura muestra.png',
    },
    {
        id: 2,
        category: 'Music', 
        title: 'Concierto de cámara',
        day: '25',
        month: 'Agosto',
        description: 'Disfruta una velada mágica en nuestro concierto de cámara. Solistas de renombre interpretarán obras maestras, acompañados por un ensamble espectacular.',
        place: 'CDMX',
        image: '/assets/img-events/Concierto de cámara.png',
    },
    {
        id: 3,
        category: 'Music', 
        title: 'Rock Fest Juventud',
        day: '30',
        month: 'Agosto',
        description: '¡Rockea con nosotros al aire libre! Únete a este evento de rock alternativo con bandas emergentes nacionales. Disfruta de la música, el aire libre y de la buena vibra.',
        place: 'Islas C.U. / CDMX',
        image: '/assets/img-events/Concierto de rock.png',
    },
    {
        id: 4,
        category: 'Dance', 
        title: 'Danza Folclórica',
        day: '15',
        month: 'Septiembre',
        description: '¡Viva México! Acompáñanos en la celebración del Grito de Independencia con un espectáculo de danza folclórica. Ven a bailar y cantar.',
        place: 'Guanajuato',
        image: '/assets/img-events/Danza folcklorica.png',
    },
    {
        id: 5,
        category: 'Reading', 
        title: 'Feria del Libro',
        day: '21',
        month: 'Septiembre',
        description: 'Sumérgete en el mundo de las letras en nuestra feria del libro. Encuentra títulos y editoriales innovadores, disfruta de charlas, talleres y actividades para todos.',
        place: 'Querétaro',
        image: '/assets/img-events/Feria del libro.png',
    },
    {
        id: 6,
        category: 'Music', 
        title: 'Festival pueblos nativos',
        day: '28',
        month: 'Septiembre',
        description: 'Descubre la riqueza cultural de nuestros pueblos nativos en este festival vibrante. Música, danza artesanías y gastronomía de nuestras comunidades originarias te esperan.',
        place: 'Estado de México',
        image: '/assets/img-events/Festival pueblos nativos.png',
    },
    {
        id: 7,
        category: 'Theater', 
        title: 'La Bella y la Bestia',
        day: '05',
        month: 'Octubre',
        description: 'En un castillo encantado, una joven valiente y un príncipe embrujado se encontrarán en un baile de amor y transformación. Un espectáculo para soñar y enamorarse.',
        place: 'Chapultepec / CDMX',
        image: '/assets/img-events/Obra de teatro.png',
    },
    {
        id: 8,
        category: 'Reading', 
        title: 'Aurora: Empoderamiento',
        day: '09',
        month: 'Octubre',
        description: 'Con una pluma valiente y reflexiva, desafía las normas y aborda temas de género, identidad y justicia social. Un diálogo  con la autora Aurora Rivera',
        place: 'Mérida',
        image: '/assets/img-events/Presentación libro de Aurora.png',
    },
    {
        id: 9,
        category: 'Sculpture', 
        title: 'Taller de cerámica',
        day: '12',
        month: 'Octubre',
        description: 'En nuestro taller de cerámica, aprenderás técnicas básicas para dar vida a tus piezas únicas. Todos son bienvenidos a experimentar y expresarse a través de este arte ancestral.',
        place: 'Guadalajara',
        image: '/assets/img-events/Taller de ceramica.png',
    },
    {
        id: 10,
        category: 'Painting', 
        title: 'Manitas de Colores',
        day: '19',
        month: 'Octubre',
        description: '¡Pintemos juntos! En nuestro taller infantil, los pequeños artistas podrán expresarse libremente con pinceles, colores y papel. Abre las puertas del arte de tus pequeñines.',
        place: 'Cuernavaca',
        image: '/assets/img-events/Taller de pintura infantil.png',
    },

    // Agregar más eventos aquí
];
 */

// Obtener el contenedor de los eventos
const eventContainer = document.getElementById('eventContainer');

// Función para crear una tarjeta de evento
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'col-md-4'; // Cada tarjeta ocupará 1/3 del ancho del contenedor

   card.innerHTML = `

   <div class="event-cards row">
               
        <div class="col">
            <div class="card p-3 h-100 mb-4 d-flex flex-column">
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
                               <img src="/assets/íconos/wishlist-star.png" width="20" height="20">
                           </button>
                           <button class="btn btn-outline-light">
                               <img src="/assets/íconos/calendar-plus.png" width="20" height="20">
                            </button>
                        </div>
                    </div>
               </div>
                       
               <div class="event-details mt-3">
                    <h4 class="event-title">${event.title}</h4>
                    <h6 class="event-place">${event.place}.</h6>
                    <p class="event-description flex-grow-1">${event.description}</p>
                </div>
           </div>
        </div>
`;

    eventContainer.appendChild(card);
}

// Función para cargar eventos desde el localStorage y crear las tarjetas
function loadEventsFromLocalStorage() {
    const events = JSON.parse(localStorage.getItem('eventos')) || [];
    events.forEach(event => {
        // Adaptar la estructura del evento si es necesario
        const eventData = {
            image: event.image || '/assets/img-events/evento nuevo.png', // Imagen por defecto 
            day: new Date(event.fecha).getDate(), // Obtener el día de la fecha
            month: new Date(event.fecha).toLocaleString('es-ES', { month: 'short' }), // Obtener el mes de la fecha
            title: event.nombre,
            place: `${event.ciudad}, ${event.estado}`,
            description: event.descripcion
        };
        createEventCard(eventData);
    });
}

// Cargar los eventos al cargar la página
loadEventsFromLocalStorage();

// Crear los eventos inicialmente de la const de ejemplos:
//events.forEach(createEventCard);