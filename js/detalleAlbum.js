let fotoAlbum = document.querySelector('.fotoAlbum')
let nombreAlbum = document.querySelector(".nombreAlbum")
let nombreArtista = document.querySelector(".nombreArtista")
let fecha = document.querySelector(".fecha")
let genero = document.querySelector(".generos")

let objetoId = new URLSearchParams(location.search)
let id = objetoId.get('id')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)

.then(respuesta=>{
    return respuesta.json()
})

.then(album=>{
    console.log(album)
    fotoAlbum.innerHTML += `<article class="fotos"> <img src="${album.cover_big}"> </article>`
    nombreAlbum.innerHTML += `${album.title} `
    nombreArtista.innerHTML +=``
    fecha.innerHTML += ` Fecha de Publicacion: ${album.release_date} `
    genero.innerHTML +=  ` Genero: ${album.genres.data[0].name}`
    
    //albums.innerHTML += `<article>
     
    
    
      
     //<ul> <li> ${album.tracks.data[0].title}</li> </ul> 
    //</article>`
    
    

    //Tapa del disco
    //Nombre del disco
    //Nombre del artista
    //Nombre del genero
    //Fecha de publicacion
})
.catch(error=>{
    console.log(error)
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