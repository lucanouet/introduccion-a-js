/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/




document.querySelector("#siguiente-paso").onclick = function(event){
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes")
    const cantidadIntegrantes = Number($cantidadIntegrantes.value)

    borrarIntegrantesAnteriores()
    crearIntegrantes(cantidadIntegrantes)

    event.preventDefault()
}

function crearIntegrantes(cantidadIntegrantes){
    if(cantidadIntegrantes > 0){
        mostrarBotonCalculo()
    }else{
        resetear()
    }

    for (let i = 0; i < cantidadIntegrantes; i++){
        crearIntegrante(i)
    }
}

function crearIntegrante(indice){
    const $div = document.createElement("div")
    $div.className = "integrante"
    const $label = document.createElement("label")
    $label.textContent = "Ingrese la edad del integrante numero " + (indice + 1)
    const $input = document.createElement("input")
    $input.type = "number" ;

    $div.appendChild($label)
    $div.appendChild($input)

    const $placeHolder = document.querySelector("#placeholder")
    $placeHolder.appendChild($div)
}


function borrarIntegrantesAnteriores(){
    const $integrantes = document.querySelectorAll(".integrante")
    for (let i = 0; i <$integrantes.length; i++){
        $integrantes[i].remove()
    }
}

document.querySelector("#boton-calcular").onclick = function(event){
 const numeros = obtenerEdadesIntegrates()
 mostrarEdad("mayor",obtenerMayorEdad(numeros))
 mostrarEdad("menor",obtenerMenorEdad(numeros))
 mostrarEdad("promedio",obtenerEdadPromedio(numeros))

 mostrarResultados()
 
 event.preventDefault()
}



function mostrarBotonCalculo(){
    document.querySelector("#boton-calcular").className = ""
}

function ocultarBotonCalculo(){
    document.querySelector("#boton-calcular").className = "oculto"

}

function mostrarEdad(tipo, valor){
    document.querySelector(`#edad-${tipo}`).textContent = valor
}

function mostrarResultados(){
    document.querySelector("#resultados").className = ""
}

function ocultarResultados(){
    document.querySelector("#resultados").className = "oculto"
}

function obtenerEdadesIntegrates(){
    const $integrantes = document.querySelectorAll(".integrante input")
    let edades = []
    for (let i = 0; i < $integrantes.length; i++){
        edades.push(Number($integrantes[i].value))
    }
    return edades
}

function resetear(){
    ocultarBotonCalculo()
    borrarIntegrantesAnteriores()
    ocultarResultados()
}