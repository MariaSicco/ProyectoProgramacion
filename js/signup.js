//SIGN UP

window.addEventListener('load', function(){
    let formulario= document.querySelector('form')
    let mail = document.querySelector('#mail')
    let contraseña = document.querySelector('#contraseña')

    //SPAN
    let mensaje = document.getElementById('mensaje');
    let mensaje2 = document.getElementById('mensaje2')


    //MAIL
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log(e);
        if(mail.value === ''){
            mensaje.innerHTML = '⊗ El campo nombre no puede estar vacio';
            mensaje.classList.add('mensajeError');
            mail.focus();
        }else if(mail.value !== '@'){
            mensaje.innerHTML = '⊗ Debes ingresar un correo electronico';
            mensaje.classList.add('mensajeError');
            mail.focus();
        }else{
            formulario.submit();
        }
    })
    //CONTRASEÑA
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log(e);
        if(contraseña.value === ''){
            mensaje2.innerHTML = '⊗ El campo nombre no puede estar vacio';
            mensaje2.classList.add('mensajeError');
            contraseña.focus();
        }else if(contraseña.value.length < 6){
            mensaje2.innerHTML = '⊗ La cantidad mínima de caracteres son seis';
            mensaje2.classList.add('mensajeError');
            contraseña.focus();
        }else{
            formulario.submit();
        }
    })
    


    //MAIL
    mail.addEventListener('input', function(){
        mensaje.innerHTML = '';
        mensaje.classList.remove('mensajeError');
    })
    
    mail.addEventListener('focus', function(){
        mail.style.color = 'black';
        mail.style.backgroundColor = 'rgb(222, 255, 78)';
    })

    mail.addEventListener('blur', function(){
        mail.style.color = 'black';
        mail.style.backgroundColor = 'white';
    })
    
    //CONTRASEÑA
    contraseña.addEventListener('input', function(){
        mensaje2.innerHTML = '';
        mensaje2.classList.remove('mensajeError');
    })

    contraseña.addEventListener('focus', function(){
        contraseña.style.color = 'black';
        contraseña.style.backgroundColor = 'rgb(222, 255, 78)';
    })
   
    contraseña.addEventListener('blur', function(){
        contraseña.style.color = 'black';
        contraseña.style.backgroundColor = 'white';
    })
   


})

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
/*
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
})*/