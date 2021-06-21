let fotoCancion = document.querySelector('.fotoCancion')
let nombreCancion = document.querySelector('.nombreCancion')
let nombreArtista = document.querySelector('.nombreArtista')
let nombreAlbum = document.querySelector('.nombreAlbum')


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