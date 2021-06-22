let fotoCancion = document.querySelector('.fotoCancion')
let nombreCancion = document.querySelector('.nombreCancion')
let nombreArtista = document.querySelector('.nombreArtista')
let nombreAlbum = document.querySelector('.nombreAlbum')
<<<<<<< HEAD
let video = document.querySelector('.video')

=======
let playlist = document.querySelector('.playlist')
>>>>>>> aeead91f54c28084ae894fc7b35a1ee19c8ce04e

let objetoId = new URLSearchParams(location.search)
let id = objetoId.get('id')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)

.then(respuesta=>{
    return respuesta.json()
})

.then(Datacancion=>{
    //console.log(Datacancion)
    nombreCancion.innerHTML += `${Datacancion.title}`
    fotoCancion.innerHTML += `<article class="fotos"> <img src="${Datacancion.album.cover_big}">  </article>`
    nombreArtista.innerHTML +=`${Datacancion.artist.name}`
<<<<<<< HEAD
    nombreAlbum.innerHTML += `${Datacancion.album.title}`
    video.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${Datacancion.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
   
    
=======
    nombreAlbum.innerHTML += `${Datacancion.album.title}`  
>>>>>>> aeead91f54c28084ae894fc7b35a1ee19c8ce04e
})
.catch(error=>{
    console.log(error)
})
fotoCancion.classList.add('fotoCancion')
nombreCancion.classList.add('nombreCancion')
nombreArtista.classList.add('nombreArtista')
nombreAlbum.classList.add('nombreAlbum')
<<<<<<< HEAD
video.classList.add('video')
=======

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
>>>>>>> aeead91f54c28084ae894fc7b35a1ee19c8ce04e
