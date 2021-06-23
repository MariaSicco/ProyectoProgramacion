let fotoArtista = document.querySelector('.fotoArtista')


let objetoId = new URLSearchParams(location.search)
let id = objetoId.get('id')

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`)

.then(response=>{
    return response.json()
})
.then(dataGenero=>{
    
  for(i=0; i<12; i++){
    fotoArtista.innerHTML += `<main class="caja"><article class="fotos"> <img src="${dataGenero.data[i].picture_big}">  </article><p class="nombreArt">${dataGenero.data[i].name}</p></main>`

  }
})
.catch(error=>{
    console.log(error);
})

fotoArtista.classList.add('fotoArtista')
