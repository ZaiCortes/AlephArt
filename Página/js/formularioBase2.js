/**
// Initialize a new ItemsController with currentId set to 0-Añadido
const itemsController = new ItemsController(0);

// Select the New Item Form- Añadido
const newEventForm = document.querySelector('#formularioEvento');

// Add an 'onsubmit' event listener
document.getElementById('formularioEvento').addEventListener('submit', function(event) {
    console.log('Formulario enviado');
    // Prevent default action
    event.preventDefault();

    // Select the inputs- Añadido
    // Get the values of the inputs
    const nombre = document.getElementById('nombre').value.trim();
    const inputDate = document.getElementById('inputDate').value.trim();
    const inputCity = document.getElementById('inputCity').value.trim();
    const inputState = document.getElementById('inputState').value;
    const inputCategory = document.getElementById('inputCategory').value;
    const inputMode = document.getElementById('inputMode').value;
    const descripcion = document.getElementById('descripcion').value.trim();

    const errores = [];

    // Limpiar mensajes anteriores
    document.getElementById('nombreError').textContent = '';
    document.getElementById('inputDateError').textContent = '';
    document.getElementById('inputCityError').textContent = '';
    document.getElementById('inputStateError').textContent = '';
    document.getElementById('inputCategoryError').textContent = '';
    document.getElementById('inputModeError').textContent = '';
    document.getElementById('descripcionError').textContent = '';

    // Validación de campos
    if (nombre === '') {
        errores.push('Nombre');
        document.getElementById('nombreError').textContent = 'Este campo es obligatorio.';
    }
    if (inputDate === '') {
        errores.push('Fecha');
        document.getElementById('inputDateError').textContent = 'Este campo es obligatorio.';
    }
    if (inputCity === '') {
        errores.push('Ciudad');
        document.getElementById('inputCityError').textContent = 'Este campo es obligatorio.';
    }
    if (inputState === 'Estado') {
        errores.push('Estado');
        document.getElementById('inputStateError').textContent = 'Debes seleccionar un estado.';
    }
    if (inputCategory === 'Categoría') {
        errores.push('Categoría');
        document.getElementById('inputCategoryError').textContent = 'Debes seleccionar una categoría.';
    }
    if (inputMode === 'Modalidad') {
        errores.push('Modalidad');
        document.getElementById('inputModeError').textContent = 'Debes seleccionar una modalidad.';
    }
    if (descripcion === '') {
        errores.push('Descripción');
        document.getElementById('descripcionError').textContent = 'Este campo es obligatorio.';
    }

    // Mostrar alertas Swal según el número de errores
    if (errores.length === 0) {
        Swal.fire({
            icon: "success",
            title: "¡Formulario enviado!",
            text: "Formulario enviado correctamente. Tu evento será publicado."
        });
    } else if (errores.length === 1) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `El campo ${errores[0]} es obligatorio.`
        });
    } else if (errores.length === 7) {
        Swal.fire({
            icon: "error",
            title: "Completa el formulario",
            text: "Todos los campos son obligatorios."
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Verifica los datos faltantes",
            text: "Hay varios campos que necesitan ser completados."
        });
    }

    // Add the item to the ItemsController-Añadido
       itemsController.addItem(nombre, inputDate, inputCity,inputState, inputCategory, inputMode, descripcion);

    // Almacenar los datos en localStorage
     const evento = {
       nombre: nombre.value.trim(),
       fecha: inputDate.value.trim(),
       ciudad: inputCity.value.trim(),
       estado: inputState.value,
       categoria: inputCategory.value,
       modalidad: inputMode.value,
       descripcion: descripcion.value.trim()
    };
     
    // Obtener la lista de eventos guardada en localStorage
       let eventos = JSON.parse(localStorage.getItem('eventos')) || [];
     // Añadir el nuevo evento a la lista
       eventos.push(evento);
     // Guardar la lista actualizada en localStorage
       localStorage.setItem('eventos', JSON.stringify(eventos));


    // Clear the form-Añadido
       nombre.value = '';
       inputDate.value = '';
       inputCity.value = '';
       inputState.value = 'Estado';
       inputCategory.value = 'Categoría';
       inputMode.value = 'Modalidad';
       descripcion.value = '';

});
