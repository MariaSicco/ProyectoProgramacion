let generos = document.querySelector('.genres')


let objetoId = new URLSearchParams(location.search)
let id = objetoId.get('id')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`)

.then(respuesta=>{
    return respuesta.json()
})

.then(genres=>{
    console.log(genres)
    //genres.innerHTML += `<article> <img src="${cantante.picture_big}"> <h1>${cantante.name}</h1> </article>`
    
})
.catch(error=>{
    console.log(error)
})