//Fetch Canciones del momento
let musica = document.querySelector('.musica');

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')

.then(response=>{
    return response.json()
})
.then(dataMusica=>{
    console.log(dataMusica);
    for(let i = 0; i < 6;i++){
        musica.innerHTML += `<a href="detallecancion.html?&id=${dataMusica.data[i].id}"<article class='lista'> <img src=${dataMusica.data[i].album.cover_big}> <h1>${dataMusica.data[i].title}</h1> </article></a>`
    }
    
       
    
})
.catch(error=>{
    console.log(error);
})


//Fetch Artistas
let artistas = document.querySelector('.artista')



fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists')

.then(response=>{
    return response.json()
})
.then(dataArtista=>{
    console.log(dataArtista.data)
    for(let i = 0; i < 6; i++){
        artistas.innerHTML += `<a href="detallecantante.html?&id=${dataArtista.data[i].id}" <article class='lista'>  <img src=${dataArtista.data[i].picture_big}> <h1>${dataArtista.data[i].name}</h1> </article></a> `
    }
    
})
.catch(error=>{
    console.log(error);
})

//Fetch Albums
let albums = document.querySelector('.albums')

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums')

.then(response=>{
    return response.json()
})
.then(dataAlbums=>{
    console.log(dataAlbums);
    for(let i = 0; i < 6;i++){
        albums.innerHTML += `<a href="detalledisco.html?&id=${dataAlbums.data[i].id}"<article class='lista'> <img src=${dataAlbums.data[i].cover_big}> <h1>${dataAlbums.data[i].title}</h1> </article></a>`  
    }
})
.catch(error=>{
    console.log(error);
})
