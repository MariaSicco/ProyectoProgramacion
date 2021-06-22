let fotoCancion = document.querySelector('.fotoCancion')
let nombreCancion = document.querySelector('.nombreCancion')
let nombreArtista = document.querySelector('.nombreArtista')
let nombreAlbum = document.querySelector('.nombreAlbum')
let video = document.querySelector('.video')


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