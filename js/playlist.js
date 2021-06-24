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
            listaCanciones.innerHTML += `<li><img src="${fotos.data.data[0].album.cover_big}></li>`
        })
        .catch(error =>console.log(error))
    }
}
let generohead = document.querySelector('.genero')
let playhead = document.querySelector('.play')
let usuhead = document.querySelector('.usuario')
let inMajo = document.querySelector('.inMajo')
let inAbri = document.querySelector('.inAbri')
let inPancho = document.querySelector('.inPancho')
let mailMajo = document.querySelector('.mailMajo')
let mailAbri = document.querySelector('.mailAbri')
let mailPancho = document.querySelector('.mailPancho')

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
inAbri.addEventListener('mouseover', function(){
    inAbri.style.color = 'rgb(83, 189, 238)';
})
inAbri.addEventListener('mouseout', function(){
    inAbri.style.color = 'white';
})

inMajo.addEventListener('mouseover', function(){
    inMajo.style.color = 'rgb(83, 189, 238)';
})
inMajo.addEventListener('mouseout', function(){
    inMajo.style.color = 'white';
})

inPancho.addEventListener('mouseover', function(){
    inPancho.style.color = 'rgb(83, 189, 238)';
})
inPancho.addEventListener('mouseout', function(){
    inPancho.style.color = 'white';
})

mailAbri.addEventListener('mouseover', function(){
    mailAbri.style.color = 'rgb(255, 123, 196';
})
mailAbri.addEventListener('mouseout', function(){
    mailAbri.style.color = 'white';
})

mailMajo.addEventListener('mouseover', function(){
    mailMajo.style.color = 'rgb(255, 123, 196';
})
mailMajo.addEventListener('mouseout', function(){
    mailMajo.style.color = 'white';
})

mailPancho.addEventListener('mouseover', function(){
    mailPancho.style.color = 'rgb(255, 123, 196';
})
mailPancho.addEventListener('mouseout', function(){
    mailPancho.style.color = 'white';
})




//Validando Formulario Search
let formulario = document.querySelector('form');
let buscar1 = document.querySelector('#buscar');

let mensaje = document.getElementById('mensaje')

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    if(buscar1.value === ''){
        mensaje.innerHTML = ' ⊗ El campo nombre no puede estar vacio';
        mensaje.classList.add('mensajeError');
        buscar1.focus();
    }else if(buscar1.value.length < 3){
        mensaje.innerHTML = '⊗ La cantidad mínima de caracteres son tres';
        mensaje.classList.add('mensajeError');
        buscar1.focus();
    }else{
        formulario.submit();
    }
})

buscar1.addEventListener('input', function(){
    mensaje.innerHTML = '';
    mensaje.classList.remove('mensajeError');
})
buscar1.addEventListener('focus', function(){
    buscar1.style.color = 'black';
    buscar1.style.backgroundColor = 'rgb(222, 255, 78)';
})
buscar1.addEventListener('blur', function(){
    buscar1.style.color = 'black';
    buscar1.style.backgroundColor = 'white';
})