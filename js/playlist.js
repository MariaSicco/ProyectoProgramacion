let miPlaylist = localStorage.getItem('cancionesFavoritas');
let arrayPlaylist = JSON.parse(miPlaylist);
let listaCanciones = document.querySelector('.listaCanciones');

if(arrayPlaylist.length === 0){
    listaCanciones.innerHTML = `<li>Aún no hay canciónes en tu playlist </li>`
}else{
    for (let i = 0; i < arrayPlaylist.length; i++) {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${arrayPlaylist[i]}`)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(fotos =>{
            listaCanciones.innerHTML += `<li><img src="${fotos.album.cover_big}></li>`
        })
        .catch(error =>console.log(error))
    }
}