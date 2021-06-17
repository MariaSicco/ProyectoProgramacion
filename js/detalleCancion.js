let cancion = document.querySelector('.cancion')


let objetoId = new URLSearchParams(location.search)
let id = objetoId.get('id')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart${id}`)

.then(function(respuesta){
    return respuesta.json()
})

.then(function(cancion){
    console.log(cancion)
    //artista.innerHTML += `<article> <img src="${cantante.picture_big}"> <h1>${cantante.name}</h1> </article>`
    
})
.catch(function(error){
    console.log(error)
})