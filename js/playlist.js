let playlist = document.querySelector('.playlist')

playlist.innerHTML += `<a id="agregarQuitar" href="#"> Agregar a mi playlist </a>`

let misCanciones = [];

let traerCanciones = localStorage.getItem('cancionesFavoritas')
if (traerCanciones != null) {
    misCanciones = JSON.parse(traerCanciones);
}
if(misCanciones.includes(id)){
    playlist.innerHTML = 'Quitar de mi playlist';
}
playlist.addEventListener('click', function(){
    e.preventDefault();
    if (misCanciones.includes(id)){
        let posicionCancion = misCanciones.indexOf(id);
        misCanciones.splice(posicionCancion,1)
        playlist.innerHTML = 'Agregar a mi playlist';
    }else{
        misCanciones.push(id);
        playlist.innerHTML = 'Quitar de mi playlist'
    }
    let cadenaTextoCancion = JSON.stringify(misCanciones);
    localStorage.setItem('cancionesFavoritas',cadenaTextoCancion)
})
