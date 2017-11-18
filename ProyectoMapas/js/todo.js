
//Funcion para recoger todos los datos que le pasamos por el formulario y gurdarlos en localStorage
function datos() {
  var datosForm={
    latitud: document.getElementById('latitud').value,
    longitud: document.getElementById('longitud').value,
    tipo: document.getElementById('tipo').value,
  }
  localStorage.setItem("latitud", datosForm.latitud);
  localStorage.setItem("longitud", datosForm.longitud);
  localStorage.setItem("tipo", datosForm.tipo);
  localStorage.setItem("pagina", 'mapa.html');
}

function mapa() {
    //Mostramos el mapa
    var mapa= document.createElement('div');
    mapa.id = 'mapa';
    mapa.style.width = '1000px';
    mapa.style.height= '750px';
    document.getElementById("contenedor").appendChild(mapa);
    //Objeto de google maps formado por la longitud y la latitud
    var coordenadas = new google.maps.LatLng(localStorage.getItem("latitud"), localStorage.getItem("longitud"));
    //Opciones de visualizacion del mapa
    var tipo=localStorage.getItem("tipo");
    var opciones = {
      zoom: 15,
      center: coordenadas,
      mapTypeId: tipo
    };

    //Creamos un objeto mapa de google en el div y la opcion de arrastrar el marcador
    var objetoMapa= new google.maps.Map(mapa, opciones);

    var objetoMapa = new google.maps.Marker({
    position: coordenadas,
    map: objetoMapa,
    draggable:true,
    title:"Arrastrame"
});

}
//Funcion para borrar el localStorage y asi volver al index
function borrar() {
  localStorage.clear();
  window.location='index.html';
}
