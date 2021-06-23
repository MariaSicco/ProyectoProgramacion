let busqueda = new URLSearchParams(location.search)
let buscar =busqueda.get('buscar')
let resultados = document.querySelector('.resultados')
let contenido = ''


let titulo = document.querySelector('.titulo');
titulo.innerHTML+= buscar
titulo.classList.add('tituloBusqueda')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
.then(respuesta =>{
   return respuesta.json()
})
.then(dataBusqueda =>{ 
   console.log(dataBusqueda);
   for(let i=0; i < dataBusqueda.data.length; i++){
       contenido += `<article class="contenidos">
                        <p class="tituloBusqueda"><a href="detallecancion.html?id=${dataBusqueda.data[i].id}"> ${dataBusqueda.data[i].title} </a></p>
                    </article>`
   }
   resultados.innerHTML += contenido
   if(dataBusqueda.data.length == 0){
      alert('La busqueda no trajo resultados')
   }
   
})
.catch(error =>{
   console.log(error);
})

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
