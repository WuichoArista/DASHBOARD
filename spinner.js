


const spinner = async ( pokemon ) => {
    let pokeSpinner = document.getElementById('section_spinner')
    pokeSpinner.classList.add('section_spinner_ver')

    await setTimeout( () => {
   
    pokeSpinner.classList.remove('section_spinner_ver')
    
    let alerta = document.getElementById('mensaje_alerta')
        let lugarMensaje = document.getElementById('alerta_mensaje')
        alerta.classList.add('mensaje_alerta_mostrar')
        lugarMensaje.innerHTML = `
        <p>El pokemon <b>${pokemon}</b> no fue encontrado, por favor revise si esta escrito correctamente</p>
        `

    },1000)
}

export default spinner