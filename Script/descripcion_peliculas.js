///// conectando los datos de películas a otra vista

let a = document.createElement("");
let b =document.createElement("");
let c =document.createElement("");  

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