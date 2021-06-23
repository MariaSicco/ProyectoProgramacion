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
