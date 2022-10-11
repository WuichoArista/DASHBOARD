const grafica = ( valorGrafica , titulo , lugar , tipo , tipoDatos, numero, tipoGrafica ) => {

    let etiquetas
    let converData

   if ( tipoDatos === 'poder'){
     etiquetas = Object.values(valorGrafica).map( (item) => {return item.stat.name})
     converData = Object.values(valorGrafica).map( (item) => {return item.base_stat})
    } else if ( tipoDatos === 'locacion'){
        etiquetas = Object.values(valorGrafica).map ( (item) => {return item.location_area.name} )
        let  converDataLocation = Object.values(valorGrafica).map( (item) => { return item.version_details.map( (itemdos)=>{return itemdos.max_chance} )})
        converData = Object.values(converDataLocation).map( (item) => {return item.reduce( (a , b) => { return a + b})} )
        
    }

     const dataConfig = {
        labels:etiquetas,
        datasets: [{
            label: titulo,
            backgroundColor: '#000000',
            borderColor: '#000000',
            data: converData,
        }]
     }

    if (tipo === 'fire'){
        dataConfig.datasets[0].backgroundColor =' rgba(255, 0, 0, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(255, 0, 0, 0.493)'
    } else if (tipo === 'electric'){
        dataConfig.datasets[0].backgroundColor =' rgba(255, 255, 0, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(255, 255, 0, 0.493)'
    } else if (tipo === 'normal'){
        dataConfig.datasets[0].backgroundColor =' rgba(192, 155, 155, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(192, 155, 155, 0.493)'
    } else if (tipo === 'water'){
        dataConfig.datasets[0].backgroundColor =' rgba(131, 181, 255, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(131, 181, 255, 0.493)'
    } else if (tipo === 'grass'){
        dataConfig.datasets[0].backgroundColor =' rgba(6, 134, 98, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(6, 134, 98, 0.493)'
    } else if (tipo === 'psychic'){
        dataConfig.datasets[0].backgroundColor =' rgba(55, 16, 92, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(55, 16, 92, 0.493)'
    } else if (tipo === 'ice'){
        dataConfig.datasets[0].backgroundColor =' rgba(151, 213, 231, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(151, 213, 231, 0.493)'
    } else if (tipo === 'fairy'){
        dataConfig.datasets[0].backgroundColor =' rgba(244, 85, 210, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(244, 85, 210, 0.493)'
    } else if (tipo === 'dragon'){
        dataConfig.datasets[0].backgroundColor =' rgba(221, 208, 62, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(221, 208, 62, 0.493)'
    } else if (tipo === 'bug'){
        dataConfig.datasets[0].backgroundColor ='rgba(40, 225, 19, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(40, 225, 19, 0.493)'
    } else if (tipo === 'ghost'){
        dataConfig.datasets[0].backgroundColor ='rgba(111, 111, 111, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(111, 111, 111, 0.493)'
    } else if (tipo === 'fighting'){
        dataConfig.datasets[0].backgroundColor ='rgba(108, 79, 79, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(108, 79, 79, 0.493)'
    } else if (tipo === 'dark'){
        dataConfig.datasets[0].backgroundColor ='rgba(17, 17, 17, 0.493)'
        dataConfig.datasets[0].borderColor =' rgba(17, 17, 17, 0.493)'
    } else if (tipo === 'ground'){
        dataConfig.datasets[0].backgroundColor ='rgba(137, 100, 40, 0.493)'
        dataConfig.datasets[0].borderColor ='rgba(137, 100, 40, 0.493)'
    } else if (tipo === 'poison'){
        dataConfig.datasets[0].backgroundColor ='rgba(135, 71, 194, 0.493)'
        dataConfig.datasets[0].borderColor ='rgba(135, 71, 194, 0.493)'
    } else if (tipo === 'rock'){
        dataConfig.datasets[0].backgroundColor ='rgba(55, 43, 8, 0.493)'
        dataConfig.datasets[0].borderColor ='rgba(55, 43, 8, 0.493)'
    } else if (tipo === 'steel'){
        dataConfig.datasets[0].backgroundColor ='rgba(105, 205, 218, 0.493)'
        dataConfig.datasets[0].borderColor ='rgba(105, 205, 218, 0.493)'
    }
 

    const config = {
        type: tipoGrafica,
        data: dataConfig,
        options: {
            scales: {
                y:{
                    beginAtZero: true
                }
            }
        }

    }

    
    if (numero === 'uno'){
        
        if (window.graficaUno) {
            window.graficaUno.clear();
            window.graficaUno.destroy();
        }
    
        window.graficaUno = new Chart(
            lugar,
            config
        )
    } else if ( numero === 'dos'){
        if (window.graficaDos) {
            window.graficaDos.clear();
            window.graficaDos.destroy();
        }
    
        window.graficaDos = new Chart(
            lugar,
            config
        )
    }
   

}

export default grafica