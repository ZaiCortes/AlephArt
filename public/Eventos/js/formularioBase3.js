document.addEventListener('DOMContentLoaded', () => {
    const newEventForm = document.querySelector('#formularioEvento');

    if (!newEventForm) {
        console.error('El formulario con id "formularioEvento" no se encuentra en el DOM.');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');

    document.getElementById('addImgEvents').addEventListener('click', function() {
        document.getElementById('inputImg').click();
    });

    document.getElementById('inputImg').addEventListener('change', function() {
        const files = document.getElementById('inputImg').files;
        if (files.length > 0) {
            const file = files[0];
            const fileURL = URL.createObjectURL(file);
            document.getElementById('portada').src = fileURL;
        }
    });

    newEventForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const item = {
            nombre: document.getElementById('nombre').value.trim(),
            inputDate: document.getElementById('inputDate').value.trim(),
            inputCity: document.getElementById('inputCity').value.trim(),
            inputState: document.getElementById('inputState').value,
            inputCategory: document.getElementById('inputCategory').value,
            inputHora: document.getElementById('inputHora').value,
            inputMode: document.getElementById('inputMode').value,
            descripcion: document.getElementById('descripcion').value.trim(),
            image: document.getElementById('portada').src
        };

        const errores = [];

        // Limpiar mensajes anteriores
        ['nombreError', 'inputDateError', 'inputCityError', 'inputStateError', 'inputCategoryError', 'inputHoraError', 'inputModeError', 'descripcionError'].forEach(id => {
            document.getElementById(id).textContent = '';
        });

        // Validación de campos
        if (item.nombre === '') {
            errores.push('Nombre');
            document.getElementById('nombreError').textContent = 'Este campo es obligatorio.';
        }
        if (item.inputDate === '') {
            errores.push('Fecha');
            document.getElementById('inputDateError').textContent = 'Este campo es obligatorio.';
        }
        if (item.inputCity === '') {
            errores.push('Ciudad');
            document.getElementById('inputCityError').textContent = 'Este campo es obligatorio.';
        }
        if (item.inputState === '' || item.inputState === 'Estado') {
            errores.push('Estado');
            document.getElementById('inputStateError').textContent = 'Debes seleccionar un estado.';
        }
        if (item.inputCategory === '' || item.inputCategory === 'Categoría') {
            errores.push('Categoría');
            document.getElementById('inputCategoryError').textContent = 'Debes seleccionar una categoría.';
        }
        if (item.inputHora === '') {
            errores.push('Hora');
            document.getElementById('inputHoraError').textContent = 'Debes agregar un horario.';
        }
        if (item.inputMode === '' || item.inputMode === 'Modalidad') {
            errores.push('Modalidad');
            document.getElementById('inputModeError').textContent = 'Debes seleccionar una modalidad.';
        }
        if (item.descripcion === '') {
            errores.push('Descripción');
            document.getElementById('descripcionError').textContent = 'Este campo es obligatorio.';
        }

        if (errores.length === 0) {
            Swal.fire({
                icon: "success",
                title: "¡Formulario enviado!",
                text: "Formulario enviado correctamente. Tu evento será publicado."
            }).then(() => {
                const apiUrl = 'https://alephart.up.railway.app/api/events';
                
                const requestBody = {
                    event_name: item.nombre,
                    event_description: item.descripcion,
                    event_photo: item.image || null,
                    event_date: item.inputDate,
                    event_time: item.inputHora,
                    user: {
                        id_user: 1, // ID del usuario
                        first_name: "Elena",
                        last_name: "Martínez",
                        phone_number: "5612836477",
                        password: "contr@Seña1",
                        email: "elena.martinez@email.com",
                        userProfile: {
                            id_user_profile: 1,
                            profile_photo: null,
                            banner: null,
                            about_me: "Ingresa tu about me aquí",
                            profession: "Ingresa tu profesión",
                            book: {
                                id_book: 1,
                                book_photo: null,
                                book_name: "Portafolio",
                                book_description: "Ingresa una descripción para tu portafolio."
                            }
                        },
                    },
                    userProfile: 1,  // ID del perfil del usuario
                    eventMode: {
                        id_event_mode: item.inputMode, // ID de la modalidad del evento
                    },
                    eventCategory: {
                        id_event_category: item.inputCategory, // ID de la categoría del evento
                    },
                    locationCity: {
                        id_location_city: item.inputCity, // ID de la ciudad
                    },
                    locationState: {
                        id_location_state: item.inputState, // ID del estado
                    }
                };

                if (eventId) {
                    // Editar evento existente
                    fetch(`${apiUrl}/${eventId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestBody)
                    })
                    .then(response => {
                        if (!response.ok) throw new Error('Error en la actualización');
                        return response.json();
                    })
                    .then(data => {
                        setTimeout(() => {
                            window.location.href = '../html/eventos.html';
                        }, 2000);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "No se pudo actualizar el evento."
                        });
                    });
                } else {
                    // Crear nuevo evento
                    fetch(apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestBody)
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            console.log('Evento creado con éxito:', data);
                        } else {
                            console.error('Error en la creación del evento:', data);
                        }
                    })
                    .catch(error => console.error('Error en la creación del evento:', error));
                }
            });
        }
    });

    // Cargar datos del evento para edición si existe
    if (eventId) {
        fetch(`https://alephart.up.railway.app/api/events/${eventId}`)
            .then(response => {
                if (!response.ok) throw new Error('Error al cargar el evento');
                return response.json();
            })
            .then(eventoToEdit => {
                document.getElementById('nombre').value = eventoToEdit.event_name;
                document.getElementById('inputDate').value = eventoToEdit.event_date;
                document.getElementById('inputCity').value = eventoToEdit.locationCity.id_location_city;
                document.getElementById('inputState').value = eventoToEdit.locationState.id_location_state;
                document.getElementById('inputCategory').value = eventoToEdit.eventCategory.id_event_category;
                document.getElementById('inputHora').value = eventoToEdit.event_time;
                document.getElementById('inputMode').value = eventoToEdit.eventMode.id_event_mode;
                document.getElementById('descripcion').value = eventoToEdit.event_description;
                document.getElementById('portada').src = eventoToEdit.event_photo;
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No se pudo cargar el evento."
                });
            });
    }
});
