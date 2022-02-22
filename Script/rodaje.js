var peliculas = [
  {
    nombre: "Encanto",
    año: "2021",
    descripcion:
      "En una casa mágica, vive la extraordinaria familia Madrigal donde todos tienen habilidades fantásticas.",
  },
  {
    nombre: "Encantada",
    año: "2007",
    descripcion:
      "Vive feliz en un mundo animado llamado Andalasia, donde los animales son sus compañeros. Ella sueña con su verdadero amor y lo representa con una estatua que ella misma construyó.",
  },
  {
    nombre: "Spider mas lejos de casa",
    año: "2019",
    descripcion:
      "Peter conoce entonces a Quentin Beck, un superhéroe que viene de una Tierra alternativa y está decidido a acabar con las criaturas elementales",
  },
  {
    nombre: "Aves de presa",
    año: "2020",
    descripcion:
      "Después de separarse de Joker, Harley Quinn y otras tres heroínas, Canario Negro, Cazadora y Renée Montoya, unen sus fuerzas para salvar a una niña del malvado rey del crimen Máscara Negra.",
  },
  {
    nombre: "Soul",
    año: "2020",
    descripcion:
      "Un profesor de música que ha perdido la pasión se transporta fuera de su cuerpo al 'Gran Antes' y debe encontrar el camino de regreso con la ayuda de un alma infantil que aprende sobre sí misma.",
  },
  {
    nombre: "Avengers: infinity war",
    año: "2018",
    descripcion:
      "Crea un viaje cinematográfico sin precedentes durante diez años y que abarca todo el Universo Marvel. Los Vengadores y sus superhéroes deben estar dispuestos a sacrificar todo en un intento de derrotar al poderoso Thanos, antes de que sus planes de devastación y ruina ponga fin al universo.",
  },
  {
    nombre: "Capitán América",
    año: "2011",
    descripcion:
      "El Capitán América, cuyo nombre real es Steven (Steve) Grant Rogers, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics.",
  },
];


function getListaPeliculas(){
  var peliculasLocal = JSON.parse(localStorage.getItem('ListaPeliculasLS'));
  if(peliculasLocal == null){
    peliculasLocal = peliculas;
  }
  return peliculas;
}

/////////////////////////////// Slider de películas!!

document.getElementById("slider").addEventListener("load", efecto());
function efecto() {
  var imagen_Arreglo = new Array();

  imagen_Arreglo[0] = new Image();
  imagen_Arreglo[0] =
    "https://i.ibb.co/VDGChnq/spiderma-pelicula.jpg";

  imagen_Arreglo[1] = new Image();
  imagen_Arreglo[1] =
    "https://i.ibb.co/vPJSHVC/1625238771-202608-1625238808-noticia-normal.jpg";

  imagen_Arreglo[2] = new Image();
  imagen_Arreglo[2] =
    "https://i.ibb.co/JnX0sD8/3-IO6-UEZORNC6-POR36-YDTJD36-SY.jpg";

  imagen_Arreglo[3] = new Image();
  imagen_Arreglo[3] =
    "https://i.ibb.co/MkMRS9n/peliculas-familiares.jpg";

  imagen_Arreglo[4] = new Image();
  imagen_Arreglo[4] =
    "https://i.ibb.co/dtVb2qy/cruela.jpg";

  imagen_Arreglo[5] = new Image();
  imagen_Arreglo[5] =
    "https://i.ibb.co/9VrRjmH/16399524819846.jpg";

  imagen_Arreglo[6] = new Image();
  imagen_Arreglo[6] =
    "https://i.ibb.co/GJHJsR8/1516604400-722996-1531823096-sumario-normal.jpg";

  var contenidoImagenes = 0;

  function Slider() {
    document.slider.src = imagen_Arreglo[contenidoImagenes];

    if (contenidoImagenes < 6) {
      contenidoImagenes = contenidoImagenes + 1;
    } else {
      contenidoImagenes = 0;
    }
  }

  setInterval(Slider, 3000);
}

/////////////////////////////// Captura y proyección información películas.

var pelicula1 = document.getElementById("bodegaPelicula1");
pelicula1.addEventListener("click", function () {
  let nombrePeli = peliculas[0].nombre;
  let añoPeli = peliculas[0].año;
  let descripcionPeli = peliculas[0].descripcion;

  localStorage.nombrePelicula = nombrePeli;
  localStorage.añoPelicula = añoPeli;
  localStorage.descripcionPelicula = descripcionPeli;

  window.open("descripcionPelicula.html");
});

var pelicula2 = document.getElementById("bodegaPelicula2");
pelicula2.addEventListener("click", function () {
  let nombrePeli = peliculas[1].nombre;
  let añoPeli = peliculas[1].año;
  let descripcionPeli = peliculas[1].descripcion;

  localStorage.nombrePelicula = nombrePeli;
  localStorage.añoPelicula = añoPeli;
  localStorage.descripcionPelicula = descripcionPeli;

  window.open("descripcionPelicula.html");
});

var pelicula3 = document.getElementById("bodegaPelicula3");
pelicula3.addEventListener("click", function () {
  let nombrePeli = peliculas[2].nombre;
  let añoPeli = peliculas[2].año;
  let descripcionPeli = peliculas[2].descripcion;

  localStorage.nombrePelicula = nombrePeli;
  localStorage.añoPelicula = añoPeli;
  localStorage.descripcionPelicula = descripcionPeli;

  window.open("descripcionPelicula.html");
});

var pelicula4 = document.getElementById("bodegaPelicula4");
pelicula4.addEventListener("click", function () {
  let nombrePeli = peliculas[3].nombre;
  let añoPeli = peliculas[3].año;
  let descripcionPeli = peliculas[3].descripcion;

  localStorage.nombrePelicula = nombrePeli;
  localStorage.añoPelicula = añoPeli;
  localStorage.descripcionPelicula = descripcionPeli;

  window.open("descripcionPelicula.html");
});

var pelicula5 = document.getElementById("bodegaPelicula5");
pelicula5.addEventListener("click", function () {
  let nombrePeli = peliculas[4].nombre;
  let añoPeli = peliculas[4].año;
  let descripcionPeli = peliculas[4].descripcion;

  localStorage.nombrePelicula = nombrePeli;
  localStorage.añoPelicula = añoPeli;
  localStorage.descripcionPelicula = descripcionPeli;

  window.open("descripcionPelicula.html");
});

var pelicula6 = document.getElementById("bodegaPelicula6");
pelicula6.addEventListener("click", function () {
  let nombrePeli = peliculas[5].nombre;
  let añoPeli = peliculas[5].año;
  let descripcionPeli = peliculas[5].descripcion;

  localStorage.nombrePelicula = nombrePeli;
  localStorage.añoPelicula = añoPeli;
  localStorage.descripcionPelicula = descripcionPeli;

  window.open("descripcionPelicula.html");
});

var pelicula7 = document.getElementById("bodegaPelicula7");
pelicula7.addEventListener("click", function () {
  let nombrePeli = peliculas[6].nombre;
  let añoPeli = peliculas[6].año;
  let descripcionPeli = peliculas[6].descripcion;

  localStorage.nombrePelicula = nombrePeli;
  localStorage.añoPelicula = añoPeli;
  localStorage.descripcionPelicula = descripcionPeli;

  window.open("descripcionPelicula.html");
});

//////////////////////////////////
