

///// conectando los datos de películas a otra vista

let a = document.createElement("DIV");
let b =document.createElement("DIV");
let c =document.createElement("DIV");  

// nombre película desde localStorage;
a.innerHTML = localStorage.getItem("nombrePelicula");
document.body.appendChild(a);
a.setAttribute("class","datosPeli");

// año película desde localStorage;
b.innerHTML = localStorage.getItem("añoPelicula");
a.appendChild(b);
b.setAttribute("class","datosPeli");

// descripción película desde localStorage;
c.innerHTML = localStorage.getItem("descripcionPelicula");
a.appendChild(c);
c.setAttribute("class","datosPeli");

//almacenar los datos

function mostrarDatos(){
    var movie = getListaPeliculas(),
    tbody =document.querySelector('#tblPeliculas tbody');

    tbody.innerHTML = '';

    for(var i=0; i<movie.length; i++){
        var fila = document.createElement('tr'),
            celdaNombre = document.createElement('td'),
            celdaAno = document.createElement('td');
            celaDescripcion = document.createElement('td');

    celdaNombre .innerHTML = movie[i][0];
    celdaAno.innerHTML = movie[i][1];
    celaDescripcion.innerHTML = movie[i][2];

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaAno);
    fila.appendChild(celaDescripcion);


    tbody.appendChild(fila);

    }
}