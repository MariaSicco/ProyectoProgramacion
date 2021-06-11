//Fetch Canciones del momento
let musica = document.querySelector('.musica');

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127')

.then(function(response){
    return response.json()
})
.then(function(dataMusica){
    //console.log(dataMusica);
    musica.innerHTML += `<article class='lista'> <img src=${dataMusica.cover_big}> <h1>${dataMusica.title}</h1> </article>`
       
    
})
.catch(function(error){
    console.log(error);
})


//Fetch Artistas
let artistas = document.querySelector('.artista')

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27')

.then(function(response){
    return response.json()
})
.then(function(dataArtista){
    //console.log(dataArtista)
    artistas.innerHTML += `<article class='lista'> <img src=${dataArtista.picture_big}> <h1>${dataArtista.name}</h1> </article>`
})
.catch(function(error){
    console.log(error);
})

//Fetch Artistas
/*

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
*/