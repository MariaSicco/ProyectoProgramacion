let generos = document.querySelector('.genres')


let objetoId = new URLSearchParams(location.search)
let id = objetoId.get('id')


fetch(`https://cors-anywhere.herokuapp.com/`)

.then(function(respuesta){
    return respuesta.json()
})

.then(function(genres){
    console.log(genres)
    //artista.innerHTML += `<article> <img src="${cantante.picture_big}"> <h1>${cantante.name}</h1> </article>`
    
})
.catch(function(error){
    console.log(error)
})