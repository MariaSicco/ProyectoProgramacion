let fotoCancion = document.querySelector('.fotoCancion')
let nombreCancion = document.querySelector('.nombreCancion')
let nombreArtista = document.querySelector('.nombreArtista')
let nombreAlbum = document.querySelector('.nombreAlbum')
let playlist = document.querySelector('.playlist')
let video  = document.querySelector('.video')
let miLista = document.querySelector('.miLista')

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
    miLista.innerHTML += `<a href="playlist.html"> Ir a mi playlist </a>` 
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
miLista.classList.add('miLista')

//PLAYLIST
let misCanciones = [];
let traerCanciones = localStorage.getItem('cancionesFavoritas')

if(traerCanciones != null){
    misCanciones = JSON.parse(traerCanciones);
}
if(misCanciones.includes(id)){
    playlist.innerHTML = `<a href="#"> Quitar de mi playlist </a>`
}
playlist.addEventListener('click', function(e){
    e.preventDefault()
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
let inMajo = document.querySelector('.inMajo')
let inAbri = document.querySelector('.inAbri')
let inPancho = document.querySelector('.inPancho')
let mailMajo = document.querySelector('.mailMajo')
let mailAbri = document.querySelector('.mailAbri')
let mailPancho = document.querySelector('.mailPancho')

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
inAbri.addEventListener('mouseover', function(){
    inAbri.style.color = 'rgb(83, 189, 238)';
})
inAbri.addEventListener('mouseout', function(){
    inAbri.style.color = 'white';
})

inMajo.addEventListener('mouseover', function(){
    inMajo.style.color = 'rgb(83, 189, 238)';
})
inMajo.addEventListener('mouseout', function(){
    inMajo.style.color = 'white';
})

inPancho.addEventListener('mouseover', function(){
    inPancho.style.color = 'rgb(83, 189, 238)';
})
inPancho.addEventListener('mouseout', function(){
    inPancho.style.color = 'white';
})

mailAbri.addEventListener('mouseover', function(){
    mailAbri.style.color = 'rgb(255, 123, 196';
})
mailAbri.addEventListener('mouseout', function(){
    mailAbri.style.color = 'white';
})

mailMajo.addEventListener('mouseover', function(){
    mailMajo.style.color = 'rgb(255, 123, 196';
})
mailMajo.addEventListener('mouseout', function(){
    mailMajo.style.color = 'white';
})

mailPancho.addEventListener('mouseover', function(){
    mailPancho.style.color = 'rgb(255, 123, 196';
})
mailPancho.addEventListener('mouseout', function(){
    mailPancho.style.color = 'white';
})

//Validando Formulario Search
let formulario = document.querySelector('form');
let buscar1 = document.querySelector('#buscar');

let mensaje = document.getElementById('mensaje')

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    if(buscar1.value === ''){
        mensaje.innerHTML = ' ⊗ El campo nombre no puede estar vacio';
        mensaje.classList.add('mensajeError');
        buscar1.focus();
    }else if(buscar1.value.length < 3){
        mensaje.innerHTML = '⊗ La cantidad mínima de caracteres son tres';
        mensaje.classList.add('mensajeError');
        buscar1.focus();
    }else{
        formulario.submit();
    }
})

buscar1.addEventListener('input', function(){
    mensaje.innerHTML = '';
    mensaje.classList.remove('mensajeError');
})
buscar1.addEventListener('focus', function(){
    buscar1.style.color = 'black';
    buscar1.style.backgroundColor = 'rgb(222, 255, 78)';
})
buscar1.addEventListener('blur', function(){
    buscar1.style.color = 'black';
    buscar1.style.backgroundColor = 'white';
})