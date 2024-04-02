// Obtener el modal
var modal = document.getElementById("miModal");

// Obtener el botón que abre el modal
var btnAbrir = document.getElementById("abrirModal");

// Obtener el botón para cerrar el modal
var btnCerrar = document.getElementById("btnCerrarModal");

// Obtener el elemento span que cierra el modal
var spanCerrar = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace clic en el botón, abrir el modal
btnAbrir.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en el botón para cerrar el modal
btnCerrar.onclick = function() {
    // Validar el formulario antes de cerrar el modal
    if (validarFormulario()) {
        cerrarModal();
    }
}

// Cuando el usuario hace clic en <span> (x), cerrar el modal
spanCerrar.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var alertaMostrada=false;

// Función para cerrar el modal después de ejecutar una instrucción
function cerrarModal() {
    if (!alertaMostrada){
    // Instrucción adicional antes de cerrar el modal (puede ser un mensaje de agradecimiento)


    alert("¡Gracias por solicitar una copia GRATUITA de mi Curso Digital de FINANZAS!"+
    "\n"+"\nSeguro lo disfrutarás!! En unos minutos te llegará al correo que acabas de registrar. De no ser así, házmelo saber."+
    "\n"+"\ncaroline.sada@tururu.com");
    alertaMostrada=true;
    }

    // Cerrar el modal
    modal.style.display = "none";
}

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var acepto = document.getElementById("acepto").checked;
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,15})/i;
  
    if (nombre.trim() == "" || email.trim() == "" || !acepto) {
        alert("Por favor, complete todos los campos y acepte los términos y condiciones.");
        return false;
    } else if (!expReg.test(email)) {
        alert("El email ingresado no es válido");
        return false;
    }
  
    return true;
}
