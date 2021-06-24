//EVENTOS
let generohead = document.querySelector('.genero')
let playhead = document.querySelector('.play')
let usuhead = document.querySelector('.usuario')
let loghead = document.querySelector('.logeate')

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