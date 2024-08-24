
  document.getElementById('formularioEvento').addEventListener('submit', function(event) {
    //Evitar que el formulario se envíe automáticamente
    event.preventDefault();
    //obtener valores de los campos
    const nombre = document.getElementById('nombre').value;
    const inputDate = document.getElementById('inputDate').value;
    const inputCity = document.getElementById('inputCity').value;
    const inputState = document.getElementById('inputState').value;
    const inputCategory = document.getElementById('inputCategory').value;
    const inputMode = document.getElementById('inputMode').value;
    const descripción = document.getElementById('descripción').value;
 
    //Obtener referencias a los elementos error
    const nombreError = document.getElementById('nombre');
    const inputDateError = document.getElementById('inputDate');
    const inputCityError = document.getElementById('inputCity');
    const inputStateError = document.getElementById('inputState');
    const inputCategoryError= document.getElementById('inputCategory');
    const inputModeError = document.getElementById('inputMode');
    const descripciónError = document.getElementById('descripción');

    //limpiar los mensajes de error previos
    nombreError.textContent ='';
    inputDateError.textContent ='';
    inputCityError.textContent ='';
    inputStateError.textContent ='';
    inputCategoryError.textContent ='';
    inputModeError.textContent ='';
    descripciónError.textContent ='';

    //Variable para verificar si hay errores
    let isValid = true;

    //validar el nombre
    if (nombre.trim() === '') {
        //alert('El nombre del evento es requerido');
        isValid = false;
    }
    //validar la fecha
    if (inputDate.trim() === '') {
        //alert ('La fecha es requerida. ');
        isValid = false;
    }
    //validar la ciudad
    if (inputCity.length < 6) {
        //alert ('La ciudad es requerida');
        isValid = false;
    }
    //validar el estado
    if (inputState.trim() === '') {
        // alert ('El estado es requerido');
        isValid = false;
    }
    //validar la categoria
    if (inputCategory.trim() === '') {
        //alert ('La categoría es requerida');
        isValid = false;
    }
    //validar la modalidad
    if (inputMode.trim() === '') {
        //alert ('La categoria es requerida');
        isValid = false;
    }
    //validar la descripción
    if (descripción.length < 5) {
        // alert ('La descripción es requerida');
        isValid = false;
    }
    //Enviar formulario si es válido
        if(isValid) {
        //ingresarshowAlert;
    }

}); //Función basada en el formulario de contacto
 

////////////////////////////////////////////////////////////
/**
 * document.getElementById('formularioEvento').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const inputDate = document.getElementById('inputDate').value;
    const inputCity = document.getElementById('inputCity').value;
    const inputState = document.getElementById('inputState').value;
    const inputCategory = document.getElementById('inputCategory').value;
    const inputMode = document.getElementById('inputMode').value;
    const descripcion = document.getElementById('descripción').value;

    let isValid = true;

    if (nombre.trim() === '') {
        isValid = false;
    }
    if (inputDate.trim() === '') {
        isValid = false;
    }
    if (inputCity.length < 6) {
        isValid = false;
    }
    if (inputState.trim() === '') {
        isValid = false;
    }
    if (inputCategory.trim() === '') {
        isValid = false;
    }
    if (inputMode.trim() === '') {
        isValid = false;
    }
    if (descripcion.length < 5) {
        isValid = false;
    }

    if(isValid) {
        const evento = {
            nombre: nombre,
            fecha: inputDate,
            ciudad: inputCity,
            estado: inputState,
            categoria: inputCategory,
            modalidad: inputMode,
            descripcion: descripcion
        };

        console.log("Evento a guardar:", evento);

        let eventos = JSON.parse(localStorage.getItem('eventos')) || [];
        eventos.push(evento);
        console.log("Eventos guardados:", JSON.stringify(eventos));
        localStorage.setItem('eventos', JSON.stringify(eventos));

        alert("Evento guardado exitosamente!");

        // Redirigir a la página donde se mostrarán las tarjetas
        window.location.href = "/html/eventos.html";
    }
});

 */
