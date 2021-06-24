//EVENTOS
let generohead = document.querySelector('.genero')
let playhead = document.querySelector('.play')
let usuhead = document.querySelector('.usuario')

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

//REGISTRO

window.addEventListener('load', function(){

    let formulario = document.querySelector('form');  
    let nombre = document.querySelector('#nombre');
    
    let mensaje = document.getElementById('mensaje');

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log(e);
        if(nombre.value === ''){
            mensaje.innerHTML = 'El campo nombre no puede estar vacio';
            mensaje.classList.add('mensajeError');
            nombre.focus();
        }else if(nombre.value.length < 3){
            mensaje.innerHTML = 'La cantidad mínima de caracteres son tres';
            mensaje.classList.add('mensajeError');
            nombre.focus();
        }else{
            formulario.submit();
        }
    })
    //Controlando los eventos del usuario
    nombre.addEventListener('input', function(){
        mensaje.innerHTML = '';
        mensaje.classList.remove('mensajeError');
    })
    //Evento Focus
    nombre.addEventListener('focus', function(){
        nombre.style.color = 'white';
        nombre.style.backgroundColor = 'tomato';
    })
   // Evento blur
    nombre.addEventListener('blur', function(){
        nombre.style.color = 'black';
        nombre.style.backgroundColor = 'white';
    })

})








