let fotoCancion = document.querySelector('.fotoCancion')
let nombreCancion = document.querySelector('.nombreCancion')
let nombreArtista = document.querySelector('.nombreArtista')
let nombreAlbum = document.querySelector('.nombreAlbum')
let playlist = document.querySelector('.playlist')

let objetoId = new URLSearchParams(location.search)
let id = objetoId.get('id')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)

.then(function(respuesta){
    return respuesta.json()
})

.then(function(Datacancion){
    //console.log(Datacancion)
    nombreCancion.innerHTML += `${Datacancion.title}`
    fotoCancion.innerHTML += `<article class="fotos"> <img src="${Datacancion.album.cover_big}">  </article>`
    nombreArtista.innerHTML +=`${Datacancion.artist.name}`
    nombreAlbum.innerHTML += `${Datacancion.album.title}`  
})
.catch(function(error){
    console.log(error)
})
fotoCancion.classList.add('fotoCancion')
nombreCancion.classList.add('nombreCancion')
nombreArtista.classList.add('nombreArtista')
nombreAlbum.classList.add('nombreAlbum')

//PLAYLIST

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
