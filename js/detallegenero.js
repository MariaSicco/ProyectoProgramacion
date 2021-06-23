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

//EVENTOS
let generohead = document.querySelector('.genero')
let playhead = document.querySelector('.play')
let usuhead = document.querySelector('.usuario')
let loghead = document.querySelector('.logeate')

generohead.addEventListener('mouseover', function(){
    generohead.style.color = 'rgb(255, 123, 196';
})
generohead.addEventListener('mouseout', function(){
    generohead.style.color = 'white';
})

playhead.addEventListener('mouseover', function(){
    playhead.style.color = 'rgb(255, 123, 196';
})
playhead.addEventListener('mouseout', function(){
    playhead.style.color = 'white';
})

usuhead.addEventListener('mouseover', function(){
    usuhead.style.color = 'rgb(255, 123, 196';
})
usuhead.addEventListener('mouseout', function(){
    usuhead.style.color = 'white';
})

loghead.addEventListener('mouseover', function(){
    loghead.style.color = 'rgb(255, 123, 196';
})
loghead.addEventListener('mouseout', function(){
    loghead.style.color = 'white';
})
