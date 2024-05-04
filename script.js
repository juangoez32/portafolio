let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


// Función que aplica las animaciones de las habilidades skill.
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        // Recorre cada habilidad y ajusta la anchura de la barra de progreso según el porcentaje especificado
        for (let i = 0; i < habilidades.length; i++) {
            let porcentaje = parseInt(habilidades[i].innerText); // Obtiene el porcentaje como entero
            habilidades[i].style.width = porcentaje + '%'; // Establece la anchura de la barra de progreso
        }
    }
}

// Detecta el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}




// script.js

document.getElementById('btnDescargarCV').addEventListener('click', function() {
    // Redirigir al usuario al enlace de descarga
    window.location.href = 'https://drive.google.com/file/d/1r9WRgSEAbAS9LhjdfKe1mwZydQu4KDvj/view?usp=drive_link';
});


//link href redes
document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace se abra automáticamente
            const url = link.getAttribute('data-url'); // Obtiene la URL del atributo de datos
            window.location.href = url; // Redirige al usuario a la URL correspondiente
        });
    });
});


// formulario envio de correo y limpiar campos
document.addEventListener('DOMContentLoaded', function() {
    const enviarBtn = document.getElementById('enviar');
    enviarBtn.addEventListener('click', function() {
        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const correo = document.getElementById('correo').value;
        const tema = document.getElementById('tema').value;
        const mensaje = document.getElementById('mensaje').value;

        // Aquí debes enviar los datos del formulario por correo electrónico utilizando un servicio de backend

        // Limpiar los campos del formulario después de enviar el mensaje
        document.getElementById('nombre').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('tema').value = '';
        document.getElementById('mensaje').value = '';

        // Mostrar una notificación de éxito
        alert('El correo fue enviado exitosamente.');
    });
});
