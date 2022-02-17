
//captura los datos
let enviar = document.getElementById("boton_pelicula")
enviar.addEventListener("click",traedatos)

//trae los datos 
function traedatos() {
    let nombreUsuario = document.getElementById("nombre").value;
    let apellidoUsuario = document.getElementById("apellido").value;
    let telefonoUsuario = document.getElementById("telefono").value;
    let direccionUsuario = document.getElementById("direccion").value;
    let observacionUsuario = document.getElementById("observaciones").value;
    console.log(nombreUsuario, apellidoUsuario, telefonoUsuario, direccionUsuario, observacionUsuario)
    guardatos(nombreUsuario, apellidoUsuario, telefonoUsuario, direccionUsuario, observacionUsuario) 

    if (isNaN(telefonoUsuario)) {
        alert("El campo 'telefono' debe ser Numérico!!");

    } else {
}
}
/////////////////////////////////////
//envio informacion al localstorage 
function guardatos(nomb, ape, tel, direc, obser){
    localStorage.setItem("Nombre", nomb) 
    localStorage.setItem("Apellido", ape)
    localStorage.setItem("Telefono", tel)
    localStorage.setItem("Dirrecion", direc)
    localStorage.setItem("Observacion", obser)

}



