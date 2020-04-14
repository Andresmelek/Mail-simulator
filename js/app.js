// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// event listeners

eventListeners();

function eventListeners(){
    // inicio de la aplicación y desabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);   

    // campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);


    // boton enviar en el submit

    btnEnviar.addEventListener('click', enviarEmail);

    // boton reset

    resetBtn.addEventListener('click', resetFormulario);
}


// funciones

function inicioApp(){
    // deshabilitar el envio
    btnEnviar.disabled = true;

}

// valida que el campo tenga algo escrito
function validarCampo(){
    
    // se valida longitud del texto y que no este vacio
    validarLongitud(this); {

        // validar unicamente el mail
        if (this.type === 'email'){
            validarEmail(this);
        }

        let errores = document.querySelectorAll('error');
        if (email.value !== "" && asunto.value !== "" && mensaje.value !== ""){
            if (errores.length === 0) {
                btnEnviar.disabled = false;
            }
        }

    }
}

// Cuando se envia el correo
function enviarEmail(e) {
    // Spinner al presionar Enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';


    //gif al enviar el mail
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    // ocultar spinner y mostrar enviado
    setTimeout(function(){
            spinnerGif.style.display = 'none';

            document.querySelector('#loaders').appendChild(enviado);
    }, 3000);
            setTimeout(function(){
                enviado.remove();
                formularioEnviar.reset();
            }, 5000);

    e.preventDefault();
}

function validarLongitud(campo) {
    if(campo.value.length > 0 ) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
   } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
   }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if (mensaje.indexOf('@') != -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }

}
// borrar formularios
function resetFormulario(e){
    formularioEnviar.reset();
    e.preventDefault();


}