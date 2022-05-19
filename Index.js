import grafica from './grafica.js'


const renderizar = (pokemon , imagenFrente , imagenShiny) => {

    let lugarImagen = document.getElementById('contenedor_imagenes')
    let lugarGraficas= document.getElementById('contenedor_graficas')
    
    lugarImagen.innerHTML = `
    <div class="contenedor_pokeNombre">
        <h2 class="pokeNombre">Informacion de : ${pokemon.toUpperCase()}</h2>
    </div>
    <div class="contenedor_pokeImagen">
        <img src="${imagenFrente}" alt="" class="pokeImagen">
        <img src="${imagenShiny}" alt="" class="pokeImagen">
    </div>
    `
}



const consultar = async () => {
   let buscador = document.getElementById('buscador').value
   let pokemon = buscador.toLowerCase()
   let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
   let Api = await fetch(url)
   let respuesta = await Api.json()
   let valorGrafica = respuesta.stats
   let imagenFrente = respuesta.sprites.front_default
   let imagenShiny = respuesta.sprites.front_shiny
   let tipo = respuesta.types[0].type.name
   renderizar( pokemon , imagenFrente , imagenShiny)
   
   let canva = document.getElementById('grafica-Uno')
    canva.innerHTML=''
   
   grafica(valorGrafica , pokemon , canva , tipo)
}

let boton = document.getElementById('boton')
boton.addEventListener( 'click' , consultar)