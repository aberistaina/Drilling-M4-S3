$(document).ready(function () {

let boton = $("#send")    
let correos = $("#cc1, #cc2, #cc3, #cc4, #cc5, #cc6")
let listaCorreos = []
let para = $("#to")
let titulo = $("#title")
let body = $("#body")
let de = $("#from")

boton.on("click", function(){
    listaCorreos = []
    for (let correo of correos) {
        if ($(correo).val()) {
            listaCorreos.push($(correo).val());
            
        }
    }
    limpiar()
    escribir(...listaCorreos)

})

function escribir(...args){
    console.log(`PARA: ${para.val()}\nTITULO: ${titulo.val()}\nMENSAJE: ${body.val()}\nFROM: ${de.val()} `)
    for(let i = 0; i < listaCorreos.length; i++){
        console.log(`CC: ${args[i]}`)
    }
    
}


function limpiar(){
    para.val("")
    titulo.val("")
    body.val("")
    de.val("")
    correos.val("")
}















});