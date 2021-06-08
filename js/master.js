//Fetch Canciones del momento
let musica = document.querySelector('.musica');

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127')

.then(function(response){
    return response.json()
})
.then(function(dataMusica){
    console.log(dataMusica);
})
.catch(function(error){
    console.log(error);
})
//Hay que arreglarlo

//Fetch Top Albums
let musica = document.querySelector('.musica');

fetch ('')

.then(function(response){
    return response.json()
})
.then(function(dataMusica){
    console.log(dataMusica);
})
.catch(function(error){
    console.log(error);
})

//Fetch Artistas
let musica = document.querySelector('.musica');

fetch ('')

.then(function(response){
    return response.json()
})
.then(function(dataMusica){
    console.log(dataMusica);
})
.catch(function(error){
    console.log(error);
})