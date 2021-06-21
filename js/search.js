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