let albums = document.querySelector('.datosDisco')


let objetoId = new URLSearchParams(location.search)
let id = objetoId.get('id')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)

.then(function(respuesta){
    return respuesta.json()
})

.then(function(album){
    console.log(album)
    //artista.innerHTML += `<article> <img src="${cantante.picture_big}"> <h1>${cantante.name}</h1> </article>`
    
})
.catch(function(error){
    console.log(error)
})