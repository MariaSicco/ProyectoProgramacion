let artista = document.querySelector('.detalleArtista')


let objetoId = new URLSearchParams(location.search)
let id = objetoId.get('id')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27${id}`)

.then(function(respuesta){
    return respuesta.json()
})

.then(function(cantante){
    console.log(cantante)
    artista.innerHTML += `<article> <img src="${cantante.picture_big}"> <h1>${cantante.name}</h1> </article>`
    
})
.catch(function(error){
    console.log(error)
})

