

document.getElementById("boton_pelicula").addEventListener("click", function() {
    var nombreUsuario = document.getElementById("nombre").value;
    var apellidoUsuario = document.getElementById("apellido").value;
    var direccionUsuario = document.getElementById("direccion").value;
    var observacionUsuario = document.getElementById("observaciones").value;

    var telefonoUsuario = document.getElementById("telefono").value;
    
    if (isNaN(telefonoUsuario)) {
        alert("El campo 'dirección' debe ser Numérico!!");

    } else {
    
    // localStorage
    
    
    localStorage.nombre = nombreUsuario;
    localStorage.apellido = apellidoUsuario;
    localStorage.telefono = telefonoUsuario;
    localStorage.direccion = direccionUsuario;
    localStorage.observacion = observacionUsuario;
  


}
/////////////////////////////////////

  });

