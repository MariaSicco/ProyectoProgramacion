let fotoCancion = document.querySelector('.fotoCancion')
let nombreCancion = document.querySelector('.nombreCancion')
let nombreArtista = document.querySelector('.nombreArtista')
let nombreAlbum = document.querySelector('.nombreAlbum')
let playlist = document.querySelector('.playlist')
let video  = document.querySelector('.video')

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
    nombreAlbum.innerHTML += `${Datacancion.album.title}`
    playlist.innerHTML += `<a href="#"> Agregar a mi playlist </a>`
    video.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${Datacancion.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`  
})
.catch(error=>{
    console.log(error)
})

fotoCancion.classList.add('fotoCancion')
nombreCancion.classList.add('nombreCancion')
nombreArtista.classList.add('nombreArtista')
nombreAlbum.classList.add('nombreAlbum')
video.classList.add('video')

let misCanciones = [];
let traerCanciones = localStorage.getItem('cancionesFavoritas')

if(traerCanciones != null){
    misCanciones = JSON.parse(traerCanciones);
}
if(misCanciones.includes(id)){
    playlist.innerHTML = `<a href="#"> Quitar de mi playlist </a>`
}
playlist.addEventListener('click', function(){
    if(misCanciones.includes(id)){
        let posicionCancion = misCanciones.indexOf(id);
        misCanciones.splice(posicionCancion,1);
        playlist.innerHTML = `<a href="#"> Agregar a mi playlist </a>`;
    }else{
        misCanciones.push(id);
        playlist.innerHTML = `<a href="#"> Quitar de mi playlist </a>`;
    }
    let cadenaTexto = JSON.stringify(misCanciones);
    localStorage.setItem('cancionesFavoritas',cadenaTexto);
    console.log(localStorage);
})

//EVENTOS
let generohead = document.querySelector('.genero')
let playhead = document.querySelector('.play')
let usuhead = document.querySelector('.usuario')
let loghead = document.querySelector('.logeate')

generohead.addEventListener('mouseover', function(){
    generohead.style.color = 'rgb(255, 123, 196';
})
generohead.addEventListener('mouseout', function(){
    generohead.style.color = 'white';
})

playhead.addEventListener('mouseover', function(){
    playhead.style.color = 'rgb(255, 123, 196';
})
playhead.addEventListener('mouseout', function(){
    playhead.style.color = 'white';
})

usuhead.addEventListener('mouseover', function(){
    usuhead.style.color = 'rgb(255, 123, 196';
})
usuhead.addEventListener('mouseout', function(){
    usuhead.style.color = 'white';
})

loghead.addEventListener('mouseover', function(){
    loghead.style.color = 'rgb(255, 123, 196';
})
loghead.addEventListener('mouseout', function(){
    loghead.style.color = 'white';
})
