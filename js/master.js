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