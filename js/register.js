//REGISTRO

window.addEventListener('load', function(){

    let formulario = document.querySelector('form');  
    let nombre = document.querySelector('#nombre');
    let mail = document.querySelector('#mail')
    let date = document.querySelector('#date')
    let genero = document.querySelector('#genero')
    let verificacion = document.querySelector('#verificacion')


    //SPAN
    let mensaje = document.getElementById('mensaje');
    let mensaje2 = document.getElementById('mensaje2')
    let mensaje3 = document.getElementById('mensaje3')
    let mensaje4 = document.getElementById('mensaje4')
    let mensaje5 = document.getElementById('mensaje5')
    let mensaje6 = document.getElementById('mensaje6')


    // NOMBRE
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log(e);
        if(nombre.value === ''){
            mensaje.innerHTML = '⊗ El campo nombre no puede estar vacio';
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
    //MAIL
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log(e);
        if(mail.value === ''){
            mensaje2.innerHTML = '⊗ El campo nombre no puede estar vacio';
            mensaje2.classList.add('mensajeError');
            mail.focus();
        }else if(mail.value !== '@'){
            mensaje2.innerHTML = '⊗ Debes ingresar un correo electronico';
            mensaje2.classList.add('mensajeError');
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
            mensaje3.innerHTML = '⊗ El campo nombre no puede estar vacio';
            mensaje3.classList.add('mensajeError');
            contraseña.focus();
        }else if(contraseña.value.length < 6){
            mensaje3.innerHTML = '⊗ La cantidad mínima de caracteres son seis';
            mensaje3.classList.add('mensajeError');
            contraseña.focus();
        }else{
            formulario.submit();
        }
    })
    //DATE  
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log(e);
        if(date.value === ''){
            mensaje4.innerHTML = '⊗ El campo nombre no puede estar vacio';
            mensaje4.classList.add('mensajeError');
            contraseña.focus();
        }else{
            formulario.submit();
        }
    })  
    //GENERO
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log(e);
        if(genero.value === ''){
            mensaje5.innerHTML = '⊗ El campo nombre no puede estar vacio';
            mensaje5.classList.add('mensajeError');
            genero.focus();
        }else{
            formulario.submit();
        }
    })  
    //VERIFICACION
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log(e);
        if(verificacion.value === ''){
            mensaje6.innerHTML = '⊗ El campo nombre no puede estar vacio';
            mensaje6.classList.add('mensajeError');
            verificacion.focus();
        }else{
            formulario.submit();
        }
    })  

    // NOMBRE
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

    //MAIL
    mail.addEventListener('input', function(){
        mensaje2.innerHTML = '';
        mensaje2.classList.remove('mensajeError');
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
        mensaje3.innerHTML = '';
        mensaje3.classList.remove('mensajeError');
    })

    contraseña.addEventListener('focus', function(){
        contraseña.style.color = 'black';
        contraseña.style.backgroundColor = 'rgb(222, 255, 78)';
    })
   
    contraseña.addEventListener('blur', function(){
        contraseña.style.color = 'black';
        contraseña.style.backgroundColor = 'white';
    })
    //DATE
    date.addEventListener('input', function(){
        mensaje4.innerHTML = '';
        mensaje4.classList.remove('mensajeError');
    })

    date.addEventListener('focus', function(){
        date.style.color = 'black';
        date.style.backgroundColor = 'rgb(222, 255, 78)';
    })
   
    date.addEventListener('blur', function(){
        date.style.color = 'black';
        date.style.backgroundColor = 'white';
    })
    //GENERO
    genero.addEventListener('input', function(){
        mensaje5.innerHTML = '';
        mensaje5.classList.remove('mensajeError');
    })
    //VERIFICACION
    verificacion.addEventListener('input', function(){
        mensaje6.innerHTML = '';
        mensaje6.classList.remove('mensajeError');
    })


})









