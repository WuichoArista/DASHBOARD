import grafica from './grafica.js'
import spinner from './spinner.js'



const renderizar = (pokemon, tipo , imagenFrente , imagenShiny) => {

    let lugarImagen = document.getElementById('contenedor_imagenes')
    
    lugarImagen.innerHTML = `
    <div class="contenedor_pokeInfo">
        <h2 class="pokeNombre">Nombre : ${pokemon.toUpperCase()}</h2>
        <h2 class="pokeNombre">Tipo : ${tipo.toUpperCase()}</h2>
    </div>
    <div class="contenedor_pokeImagen">
        <div >
             <h4>Normal</h4>
             <img src="${imagenFrente}" alt="" class="pokeImagen">
        </div>
        <div>
             <h4>Shiny</h4>
             <img src="${imagenShiny}" alt="" class="pokeImagen">
        </div>
    </div>
    `
}



const consultar = async () => {
   let buscador = document.getElementById('buscador').value
   let pokemon = buscador.toLowerCase()

   try{

        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon === '' ? pokemon = 'bulbasaur': pokemon }`
        let Api = await fetch(url)
        let respuesta = await Api.json()
        let valorGrafica = respuesta.stats
        let imagenFrente = respuesta.sprites.front_default
        let imagenShiny = respuesta.sprites.front_shiny
        let tipo = respuesta.types[0].type.name
        let id = respuesta.id
        let urlLocation = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`
        let ApiLocation = await fetch(urlLocation)
        let respuestaLocation = await ApiLocation.json()
        renderizar( pokemon, tipo , imagenFrente , imagenShiny)
        let canvaGraficaUno = document.getElementById('grafica-Uno')
        let canvaGraficados = document.getElementById('grafica-Dos')
        grafica(valorGrafica , `Estadisticas de: ${pokemon.toUpperCase()}` , canvaGraficaUno , tipo, 'poder', 'uno' , 'radar' )
        grafica(respuestaLocation , 'Region en la que se encuentra' , canvaGraficados , tipo, 'locacion', 'dos', 'bar' )

   } catch(e){
        await spinner( pokemon )
        

   }
  
}

let boton = document.getElementById('boton')
    boton.addEventListener( 'click' , consultar)

let botonAlerta = document.getElementById('boton_alert')
    botonAlerta.addEventListener ( 'click' , () => {
        let alerta = document.getElementById('mensaje_alerta')
        alerta.classList.remove('mensaje_alerta_mostrar')
    } )

consultar()