//Fetch Canciones del momento
let musica = document.querySelector('.musica');

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')

.then(function(response){
    return response.json()
})
.then(function(dataMusica){
    console.log(dataMusica);
    for(let i = 0; i < 6;i++){
        musica.innerHTML += `<article class='lista'> <img src=${dataMusica.data[i].album.cover_big}> <h1>${dataMusica.data[i].title}</h1> </article>`
    }
    
       
    
})
.catch(function(error){
    console.log(error);
})


//Fetch Artistas
let artistas = document.querySelector('.artista')



fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists')

.then(function(response){
    return response.json()
})
.then(function(dataArtista){
    console.log(dataArtista)
    for(let i = 0; i < 6; i++){
        artistas.innerHTML += `<article class='lista'> <a href="detallecantante.html?&id=${dataArtista.id}"> <img src=${dataArtista.data[i].picture_big}> </a> <h1>${dataArtista.data[i].name}</h1> </article> `
    }
    
})
.catch(function(error){
    console.log(error);
})

//Fetch Albums
let albums = document.querySelector('.albums')

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums')

.then(function(response){
    return response.json()
})
.then(function(dataAlbums){
    console.log(dataAlbums);
    for(let i = 0; i < 6;i++){
        albums.innerHTML += `<article class='lista'> <img src=${dataAlbums.data[i].cover_big}> <h1>${dataAlbums.data[i].title}</h1> </article>`  
    }
})
.catch(function(error){
    console.log(error);
})
