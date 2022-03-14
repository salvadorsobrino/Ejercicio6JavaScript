var array = [0,1,2,3,4];

function añadirNumero(){
    let numero = parseInt(numeroIntroducido.value);
    if (isNaN(numero)){
        alert("Introduce un número");
    } else{
        array.push(numero);
        cargarValores();
    }
}
function generarAleatorio(){
    //Número aleatorio entre 0 y (longitudArray-1). No usamos round porque puede redondear una posición que no exite.
    let aleatorio = Math.floor((Math.random() * array.length)); //Se queda con la parte entera. Entre 0 y (arraylength-1)
    return aleatorio;
}
function sacarAleatorio(){
    let aleatorio = generarAleatorio();
    if (array.length>0){
        numeroAleatorio.value = array[aleatorio];
    } else {
        alert("No hay números en el array");
    }
    
}
function eliminarNumero(){
    let aleatorio = generarAleatorio();
    pos.value = aleatorio; //Mostramos el número aleatorio generado
    array.splice(aleatorio, 1); 

    /*
    The splice() method adds and/or removes array elements.
    The splice() method overwrites the original array.

    array.splice(index, howmany, item1, ....., itemX)

    index Required. The position to add/remove items. Negative value defines the position from the end of the array.
    howmany	Optional. Number of items to be removed.
    item1, ..., itemX Optional. New elements(s) to be added.

    NOTA: .slice() method returns selected elements in an array, as a new array. NO nos sirve. Necesitariamos array auxiliar
    */
    cargarValores();
}

function cargarValores(){
    let mensaje = array.join(","); 
    campoArray.value = mensaje;
}