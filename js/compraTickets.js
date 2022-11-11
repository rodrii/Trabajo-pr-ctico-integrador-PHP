
// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");

// Función para quitar el estilo de error a los elementos del form
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

// Cálculo total a pagar
function calcularTotal() {

    // Ejecuto función para que quite todos los estilos de error en los campos que los tuvieran
    quitarClaseError();

    // Verifico si lleno los siguientes campos, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (nombre.value === "") {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribí tu email.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Para determinar si el correo electrónico es válido o no
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("Por favor, escribí un correo electrónico válido.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Verifico si está ingresado al menos 1 ticket, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    // Verifico que haya seleccionado una categoría, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (categoria.value == "") {
        alert("Por favor, seleccioná una categoría.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    // Multiplico cantidad de tickets por el valor
    let totalValorTickets = (cantidadTickets.value) * 200;

    // Calculo descuentos según categoría

    if(categoria.value == "Estudiante"){

        descuento = totalValorTickets*(0.8)

    }else if(categoria.value == "Trainee"){

        descuento = totalValorTickets*(0.5)
    
    } else if(categoria.value == "Junior"){


        descuento = totalValorTickets*(0.15)
    
    }else if(categoria.value == "Sin Categoria"){

        descuento = 0

    }

    totalValorTickets = totalValorTickets - descuento


    // Inserto el valor en el HTML
    totalPago.innerHTML = totalValorTickets;
}

// Botón Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click', calcularTotal);

// Función para el botón Borrar para que borre el valor
function borrar() {
    quitarClaseError();
    nombre.innerHTML ="";
    apellido.innerHTML ="";
    mail.innerHTML ="";
    cantidadTickets.innerHTML ="";
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', borrar);