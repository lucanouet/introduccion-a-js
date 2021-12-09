//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function numeroPromedio(array){
    let acumulador = 0
    for (let i = 0; i < array.length; i++){
        acumulador += array[i]
    }

    return(acumulador / array.length).toFixed(2)
}

function numeroMayor(array){
    
    let numeroMayor = array[0]
    for (let i = 1; i < array.length; i++){
        if (array[i] > numeroMayor){
            numeroMayor = array[i]
        }
    }
    return numeroMayor
}

function numeroMenor(array){
    
    let numeroMenor = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] < numeroMenor){
            numeroMenor = array[i]
        }
    }
    return numeroMenor
}

function numeroMasFrecuente(array){
    array = array.sort()
    let elemento = []
    let repeticiones = []
    let contador = 1
    let numeroMasRepetido = 0
    let cantidadRepeticiones = 0

    for (let i = 0; i < array.length; i++){
        if (array[i+1] === array[i]){
            contador ++
        }
        else{
            elemento.push(array[i])
            repeticiones.push(contador) 
            contador = 1         

        }

        
    }

    for (let j = 0; j < repeticiones.length; j++){
        
        if(repeticiones[j] > cantidadRepeticiones){
        cantidadRepeticiones = repeticiones[j]

        numeroMasRepetido = elemento[j]
        }
    }
    
    return [numeroMasRepetido,cantidadRepeticiones]

}

function mostrarElemento(tipo, valor){
    document.querySelector(`#numero-${tipo}`).textContent = valor
}
function mostrarArrayFrecuente(tipo,[numero,cantidadRepite]){
    document.querySelector(`#numero-${tipo}`).textContent = numero
    document.querySelector("#cantidad-veces").textContent = cantidadRepite

}


const $lista = document.querySelectorAll("li")
let array = []
for (let i = 0; i < $lista.length; i++){
array.push(Number($lista[i].textContent))
}

mostrarElemento("mayor", numeroMayor(array))
mostrarElemento("menor", numeroMenor(array))
mostrarElemento("promedio", numeroPromedio(array))
mostrarArrayFrecuente("frecuente", numeroMasFrecuente(array))

