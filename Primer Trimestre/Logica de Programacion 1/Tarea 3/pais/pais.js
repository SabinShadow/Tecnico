let pais
let belice = ["Codigo: 501", "Poblacion: 374,681", "Idioma: Ingles", "Capital: Belmopan"]
let guatemala = ["Codigo: 502 ", "Poblacion: 16.91 millones ", "Idioma: Español ", "Capital: Ciudad de Guatemala "]
let salvador = ["Codigo: 503", "Poblacion: 6.378 millones", "Idioma: Español", "Capital: San Salvador"]
let honduras = ["Codigo: 504", "Poblacion: 9.265 millones", "Idioma: Español", "Capital: Tegucigalpa"]
let nicaragua = ["Codigo: 505", "Poblacion: 6.218 millones", "Idioma: Español", "Capital: Managua"]
let costaRica = ["Codigo: 506", "Poblacion: 4.906 millones", "Idioma: Español", "Capital: San Jose"]
let panama = ["Codigo: 507", "Poblacion: 4.099 millones", "Idioma: Español", "Capital: Ciudad de Panama"]


while (pais !="no") {
    pais = prompt("Selecciona un Pais, solo escribe con minusculas.")
    if (pais == "belice"){
    alert(belice)
    }
    if (pais == "guatemala"){
    alert(guatemala)
    }
    if (pais == "salvador"){
    alert(salvador)
    }
    if (pais == "honduras"){
    alert(honduras)
    }
    if (pais == "nicaragua"){
    alert(nicaragua)
    }
    if (pais == "costa rica"){
    alert(costaRica)
    }
    if (pais == "panama"){
    alert(panama)
    }
    while(pais != "si" && pais != "no"){
        pais = prompt("quiere ver otro pais si/no")
    }
}