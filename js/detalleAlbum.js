let albums = document.querySelector('.datosDisco')
console.log(albums)

let objetoId = new URLSearchParams(location.search)
let id = objetoId.get('id')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)

.then(function(respuesta){
    return respuesta.json()
})

.then(function(album){
    console.log(album)
    
    albums.innerHTML += `<article>
    <img src="${album.cover_big}"> 
     <h1>${album.title}</h1> 
     <p>${album.genres.data[0].name}</p>
     <p>${album.release_date}</p>  
     <ul> <li> ${album.tracks.data[0].title}</li> </ul> 
    </article>`
    
    

    //Tapa del disco
    //Nombre del disco
    //Nombre del artista
    //Nombre del genero
    //Fecha de publicacion
})
.catch(function(error){
    console.log(error)
})