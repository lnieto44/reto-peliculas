const enviarDatos = () => {

    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    telefono = Number(document.getElementById('telefono').value);
    direccion = document.getElementById('direccion').value;
    descripcion = document.getElementById('observaciones').value;

    if (nombre == "" || apellido == "" || telefono == 0 || direccion == "" || descripcion == "") {
    
    } else if (isNaN(telefono)) {
       
    } else {
        localStorage.setItem("Nombre", JSON.stringify(nombre));
        localStorage.setItem("Apellido", JSON.stringify(apellido));
        localStorage.setItem("Telefono", JSON.stringify(telefono));
        localStorage.setItem("Direccion", JSON.stringify(direccion));
        localStorage.setItem("Descripcion", JSON.stringify(descripcion));
       
    }
}

let enviar = document.querySelector('#boton_pelicula');
enviar.addEventListener('click', enviarDatos, true);

let nombre,
    apellido,
    telefono,
    direccion,
    descripcion;



