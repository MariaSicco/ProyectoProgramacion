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

loghead.addEventListener('mouseover', function(){
    loghead.style.color = 'rgb(255, 123, 196';
})
loghead.addEventListener('mouseout', function(){
    loghead.style.color = 'white';
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
let nombre = document.querySelector('#nombre');

let mensaje = document.getElementById('mensaje')

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    if(nombre.value === ''){
        mensaje.innerHTML = ' ⊗ El campo nombre no puede estar vacio';
        mensaje.classList.add('mensajeError');
        nombre.focus();
    }else if(nombre.value.length < 3){
        mensaje.innerHTML = '⊗ La cantidad mínima de caracteres son tres';
        mensaje.classList.add('mensajeError');
        nombre.focus();
    }else{
        formulario.submit();
    }
})

nombre.addEventListener('input', function(){
    mensaje.innerHTML = '';
    mensaje.classList.remove('mensajeError');
})
nombre.addEventListener('focus', function(){
    nombre.style.color = 'black';
    nombre.style.backgroundColor = 'rgb(222, 255, 78)';
})
nombre.addEventListener('blur', function(){
    nombre.style.color = 'black';
    nombre.style.backgroundColor = 'white';
})