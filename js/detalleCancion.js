let cancion = document.querySelector('.cancion')


let objetoId = new URLSearchParams(location.search)
let id = objetoId.get('id')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)

.then(function(respuesta){
    return respuesta.json()
})

.then(function(Datacancion){
    console.log(Datacancion)
    cancion.innerHTML += `<article> <img src="${Datacancion.album.cover_big}"> <h1>${Datacancion.title}</h1> </article>`
    
})
.catch(function(error){
    console.log(error)
})