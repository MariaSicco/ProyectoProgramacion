let generos = document.querySelector('.generos');

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/`)

.then(response=>{
    return response.json()
})
.then(dataGeneros=>{
    console.log(dataGeneros);
    for(let i = 1; i < 10; i++){
        generos.innerHTML += `<a href="detallegenero.html?&id=${dataGeneros.data[i].id}" <article class='gen'> <img src=${dataGeneros.data[i].picture_big}> <h1>${dataGeneros.data[i].name}</h1> </article> </a>`
    }
    
       
    
})
.catch(error=>{
    console.log(error);
})

//Eventos
let generohead = document.querySelector('.genero')
let playhead = document.querySelector('.play')
let usuhead = document.querySelector('.usuario')

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